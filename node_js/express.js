const express = require('express');
const hbs = require('express-handlebars'); //handle-bars
const bodyParser = require('body-parser');

const server = express();
const words = require('./db/words.json');



server.engine( 
    "hbs",
    hbs({
    extname:'hbs',
    defaultLayout:"layout.hbs",
    partialsDir:"partials", //부분적인 html파일을 넣을 때 사용한다.
    })
);

server.set('view engine','hbs');
server.use(express.static(__dirname + '/public')); // 이제 파일 가져오는거 public부터 시작
server.use(bodyParser.urlencoded({extended:false}));

server.get('/', (req,res) => {
    res.render('home', {
        words,
    });
});

server.post('/', (req,res) =>{
    const {query} = req.body;
    res.render('home',{
        words:words.filter(w=>w.word.toLocaleLowerCase().includes(query.toLocaleLowerCase())),
    });
});

server.delete('/', (req,res) => {
    let {word} = req.body;
    words = words.filter(w=>!(w.word === word));
});

server.get('/add', (req,res) => {
    res.render('add');
});

server.get('/quiz', (req,res) => {
    res.render('quiz');
});

// server.get('/', (req,res) =>{
//     res.send('<h1>hello LHJ</h1>');
// });
// GET
// POST     값을 서버로 보낼 때, 클라이언트로 보내는?
// DELETE       주로 데이터를 주는 경우, 데이터를 확인하는 경우
// PUT      

// 모든 서버의 요청들이 이 use를 통해서 지나가야된다.
// server.use((req, res, next) => {
//     req.user = {
//         id: '1234',
//     };
//     next();
// });

// server.get('/', (req, res) => {
//     //__dirname // 자신의 파일 경로를 찾고 싶을 때 쓰면 됨.
//     //__filename // 현재 실행되는 파일의 이름을 얻을 수 있음.
//     console.log(req.user);
//     res.sendFile(__dirname + '/test.html');
// });

// server.get('/about', (req, res) => {
//     res.sendFile(__dirname + '/about.html');
// });

// server.use((req, res) => {
//     res.sendFile(__dirname + '/404.html');
// }); 

server.listen(3001, (err) =>{
    if(err) return console.log(err);
    console.log('the server is running now');
});