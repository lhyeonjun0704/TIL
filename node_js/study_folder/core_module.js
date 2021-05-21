// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


// To use the promise-based APIs
//import * as fs from 'fs/promises';

// Using ESM Module syntax:
//import * as fs from 'fs';

const fs = require('fs');

// file 생성
//fs.writeFileSync('./heelo.text', 'Hello LHJ');

// file 불러오기
// const data = fs.readFileSync('./heelo.text', {encoding: 'utf-8'});
// console.log(data);

// file에 추가 내용 쓰기 
// data에 추가할 때 마지막 줄에 추가 되기 때문에 다음줄로 가기를 꼭 해주야됨.
//fs.appendFileSync('./heelo.text', '\n Welcome!');

const list = fs.readdirSync('.');
console.log(list);