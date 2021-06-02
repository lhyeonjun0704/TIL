const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function(){
    console.log('server is running now')
});

// app.use( express.static( path.join(__dirname, 'public') ) )
app.use( '/react', express.static( path.join(__dirname, 'react_p/build') ) )
app.use( '/', express.static( path.join(__dirname, 'public')) )

app.get('/', function(req, res){
    res.sendFile( path.join(__dirname, 'public/main.html') )
})

app.get('/react', function(req, res){
    res.sendFile( path.join(__dirname, 'react-p/build/index.html') )
})

// routing 하려면 url 아무거나 입력했을 경우에 reacthtml보내주세요. 라는 뜻입니다.
// appget('*', function(req, res){
//     res.sendFile( path.join(__dirname, 'react-p/build/index.html'))
// })