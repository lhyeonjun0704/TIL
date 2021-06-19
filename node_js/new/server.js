const express = require('express');
const app = express();

require('dotenv').config();

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// ejs file render
app.set('view engine', 'ejs');

app.use('/public', express.static('public')); //midleware



var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL, function(error, client){
    // after connecting
    if(error) return console.log(error);

    db = client.db('todoapp');

    app.listen(process.env.PORT, function(){
        console.log('listening on 8080');
    });

})



app.get('/pet', function(req, res){
    res.send('Hello World!!!!');
});

//html file을 보내보도록 하자.

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('/write', function(req, res){
    res.render('write.ejs');
});



// 쉬어가기 rest api를 쓰는게 좋다?
// Application Programming Interface이지만 web에서는 웹서버와 고객간의 소통방법(규약).
// rest api 원칙 6개 1. Uniform interface 2. client-server 역할 구분. 3. Stateless 4.Cashable 5. Layered System 6.Code on Demand


// 각 발행 글마다 번호 달기



// ejs 파일은 무조건 views에 생성해야된다.
app.get('/list', (req, res) => {

    db.collection('post').find().toArray(function(error, result){
        console.log(result);
        res.render('list.ejs', {posts: result});
    });

    
});


app.get('/detail/:id', function(req, res){
    db.collection('post').findOne({_id : parseInt(req.params.id)},function(error, result){
        console.log(result);
        res.render('detail.ejs', { name : result});
    });
})

app.get('/edit/:id', function(req, res){

    db.collection('post').findOne({_id : parseInt(req.params.id)}, function(req, result){
        console.log(result);
        res.render('edit.ejs', { post : result});
    });
    
})

app.put('/edit',function(req, res){
    db.collection('post').updateOne({_id : parseInt(req.body.id) },{ $set: {제목 : req.body.title , 날짜 : req.body.date }}, function(error, result){
        console.log('수정 완료');
        res.redirect('/list');
    });
});


// 검색 기능 search.ejs 만들기
app.get('/search', (req, res) => {
    console.log(req.query.value);
    // 정규식으로 가능은하지만 데이터가 많아지면 db에서 찾는 시간이 너무 오래 걸리게 된다.(find도 마찬가지)
    // binary search 사용이 가능한데 미리 숫자순으로 정렬이 되어있어야 가능함. 
    // 띄어쓰기 기준으로 단어를 저장하기 때문에 띄어쓰기가 되어있지 않으면 단어가 포함되어있어도 찾을 수 없다.
    // nGram이라는 걸 쓰면 가능도 하다.
    // db.collection('post').find({ $text : { $search : req.query.value } }).toArray((error, result) => {
    //     console.log(result);
    //     res.render('search.ejs', {posts : result});
    // })
    var condition = [
        {
            $search: {
                index: 'titleSearch',
                text: {
                    query : req.query.value,
                    path: '제목'
                }
            }
        },
        { $sort : { _id : 1 }}, // 찾고 나서 정렬이 가능하다. 양수는 오름 음수는 내림차순
        { $limit : 10 } // 갯수 제한하는 코드
        // {$project : {제목: 1, _id: 0, score: {$meta: "searchScore" }}}; 이런게 가능 searchscore는 검색과 관련이 깊은거 자동으로 매겨줌.
    ]
    db.collection('post').aggregate(condition).toArray((error, result) => {
        console.log(result);
        res.render('search.ejs', {posts: result});
    })
});



// 회원 인증 방법
// 1. session-based => sever는 쿠키발행(브라우저에 저장할 수 있는 긴 문자열) /로그인정보 서버에 저장
// 2. token-based(JWT) => 로그인 시, web token 발행
// 3. Open Authentication => 다른 사이트의 정보를 가져와서 회원의 정보를 확인한다.



// midle ware part
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : 'secret_code', resave : true, saveUninitialized : false}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/login', function(req, res){
    res.render('login.ejs');
});

app.post('/login', passport.authenticate('local', { // local방식으로 인증
    failureRedirect : '/login' // 로그인을 실패했을 경우 /fail로 이동해주세요.
}), function(req, res){
    res.redirect('/');
});

// 마이페이지로 이동하기
app.get('/mypage', login_success ,function(req, res){
    console.log(req.user);
    res.render('mypage.ejs', {kind : req.user});
})

function login_success(req, res, next){
    if(req.user){
        next();
    } else{
        res.send('로그인 해주세요.');
    }
}

//아이디 비번 인증하는 세부 코드 작성
passport.use(new LocalStrategy({
    // session 정보
    usernameField: 'id',
    passwordField: 'pw',
    session: true, // 세션정보를 저장할지 말지를 하는것
    passReqToCallback: false, // 아이디/비밀번호 외에도 다른 정보를 검증하려고 할 때 쓰는 부분이다.
}, function(insertID, insertPW, done){
    console.log(insertID,insertPW);
    db.collection('login').findOne({id: insertID}, function(error, result){
        if(error) return error

        // done 설명 => done은 3개의 파라미터를 가지고 있고 done(서버에러, 성공시사용자DB데이터, error message)이다.

        // db에 아이디가 없는경우, null이라는 뜻이다.
        if(!result) return done(null, false, {message : '존재하지 않는 아이디입니다.'})
        
        // 아이디 이후 -> pw를 일치하는지 확인한다.
        if(insertPW == result.pw){
            return done(null, result)
        } else{
            return done(null, false, {message : '비밀번호가 일치하지 않습니다.'})
        }
    })
})); 

// 아이디/비번이 일치하는 경우 세션을 만들어서 로그인을 유지시켜 줘야된다.

// id를 이용해서 세션을 저장시키는 코드(로그인 성공시 작동한다.)
passport.serializeUser(function(user, done){
    done(null, user.id);
});

// 이 세션 데이터를 가진 사람을 DB에서 찾아주세요(마이페이지 접속시 작동한다.)
passport.deserializeUser(function(user_id, done){
    db.collection('login').findOne({id : user_id}, function(error, result){
        done(null, result);
    })
}); 


app.post('/add', function(req, res){
    res.send('전송 완료');
    
    db.collection('counter').findOne({name: 'postnumber'}, function(error, result){
        console.log(result.totalPost);
        var totalP = result.totalPost;

        var author = { _id : totalP + 1, 제목 : req.body.title, 날짜 : req.body.date, 작성자 : req.user._id};
    
        db.collection('post').insertOne(author, function(error, result){
            console.log('저장 완료');
            db.collection('counter').updateOne({name: 'postnumber'},{ $inc :{totalPost : 1}}, (error, result) => { // $set은 바꿔달라는 operator. 
                if(error) return console.log(error)
            })

        });

    });
});


app.delete('/delete', (req, res) => {

    req.body._id = parseInt(req.body._id); // ajax에서 숫자로 넣어도 문자로 입력이 되는걸 int형으로 바꿀 수 있는 함수이다.

    var check_author = {_id : req.body._id, 작성자 : req.user._id};

    db.collection('post').deleteOne(check_author, (error, result) => {
        if (error) return console.log(error)
        res.status(200).send({ message : '삭제에 성공했습니다! '}); // 요청이 성공했다 라는 뜻이다. 400은 실패
    })
});



app.post('/register', function(req, res){
    db.collection('login').insertOne({id : req.body.id, pw : req.body.pw}, function(error, result){
        res.redirect('/');
    })
});

app.use('/shop', require('./routes/shop.js'));

app.use('/board/sub', require('./routes/sub.js'));

// multer 사용법
let multer = require('multer');
var storage = multer.diskStorage({  // ram에 저장하려면 memeryStorage
    destination : function(req, file, cb){
        cb(null, './public/images');
    },
    filename : function(req, file, cb){
        cb(null, file.originalname);
    },
    //filefilter : function(req, file, cb){ 파일 확장자 제한
 
    //}
    //limits : 파일 크기 제한
});

var upload = multer({storage : storage});


// db에 저장하면 비싸다 보통은 하드에 몰아 넣는 식으로 한다.
app.get('/upload', function(req, res){
    res.render('upload.ejs');
});

app.post('/upload', upload.single('test_img'), function(req, res){ // 여러개를 한 번에 업로드 하기 위해선 single -> array('name', 개수) 그리고 input속성도 변경해야됨.
    res.send('업로드 완료');
});

app.get('/image/:imageName', function(req, res){
    res.sendFile(__dirname + `/public/images/${req.params.imageName}`);
})