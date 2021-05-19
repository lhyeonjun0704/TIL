// Synchronous vs Asynchronous
// Blcok vs NonBlock

const fs = require('fs');

let startTime = Date.now();
let text = "";
// async 
setTimeout(()=> {
    console.log('print');
}, 1000);
fs.readFile('./heelo.text', { encoding: 'utf-8'}, (err, data) =>{
    console.log(text);
});
console.log(Date.now() - startTime, 'second');