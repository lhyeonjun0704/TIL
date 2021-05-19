const express = require('express');
const server = express();

// server.get('/', (req,res) =>{
//     res.send('<h1>hello LHJ</h1>');
// });
// GET
// POST     값을 서버로 보낼 때, 클라이언트로 보내는?
// DELETE       주로 데이터를 주는 경우, 데이터를 확인하는 경우
// PUT      

// 모든 서버의 요청들이 이 use를 통해서 지나가야된다.
server.use((req, res, ) => {
    req.user = {
        id: '1234',
    };
    next();
});

server.get('/', (req, res) => {
    //__dirname // 자신의 파일 경로를 찾고 싶을 때 쓰면 됨.
    //__filename // 현재 실행되는 파일의 이름을 얻을 수 있음.
    res.sendFile(__dirname + '/test.html');
});

server.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});


server.listen(3001, (err) =>{
    if(err) return console.log(err);
    console.log('the server is running now');
});