const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1> Hello from nodejs</h1>');
        res.end();
    } else{
        res.write('Uncorrect connection');
        res.end();
    }
});

server.listen(3001, () => {
    console.log('Ther server is running on port 3001');
});
