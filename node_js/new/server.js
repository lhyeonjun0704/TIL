const express = require('express');
const app = express();

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
MongoClient.connect('mongodb+srv://root:uiop1245@learning.rhtpd.mongodb.net/todoapp?retryWrites=true&w=majority', function(error, client){
    // after connecting
    if(error) return console.log(error);

    db = client.db('todoapp');

    app.listen(8080, function(){
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

app.post('/add', function(req, res){
    res.send('전송 완료');
    
    db.collection('counter').findOne({name: 'postnumber'}, function(error, result){
        console.log(result.totalPost);
        var totalP = result.totalPost;
    
        db.collection('post').insertOne({_id : totalP + 1, 제목 : req.body.title, 날짜 : req.body.date}, function(){
            console.log('저장 완료');
            db.collection('counter').updateOne({name: 'postnumber'},{ $inc :{totalPost : 1}}, (error, result) => { // $set은 바꿔달라는 operator. 
                if(error) return console.log(error)
            })

        });

    });
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


app.delete('/delete', (req, res) => {

    req.body._id = parseInt(req.body._id); // ajax에서 숫자로 넣어도 문자로 입력이 되는걸 int형으로 바꿀 수 있는 함수이다.

    db.collection('post').deleteOne(req.body, (error, result) => {
        
        res.status(200).send({ message : '삭제에 성공했습니다! '}); // 요청이 성공했다 라는 뜻이다. 400은 실패
    })
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

app.post('/login', function(req, res){
    
});