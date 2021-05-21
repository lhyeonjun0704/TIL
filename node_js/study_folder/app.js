// module

// const add = require('./add.js');

// console.log(add(4,5));

// const stat = require('./stat.js');

// console.log(stat.pi);
// console.log(stat.mean([3.14, 4, 5, 6]));

// const readline = require('readline-sync');

// const name = readline.question('what is your name ? \n');

// console.log(name);


// const fs = require('fs');

// //const data = fs.readFileSync('./node_js/json_s.json', {encoding: 'utf-8'});

// // console.log(data);
// // console.log(typeof data); // json이라는 string값으로 인식한다.
// // let arr = JSON.parse(data);
// // console.log(arr[2]); // parsing 하면 string이 아닌 숫자나 오브젝트 값으로 나온다.


// //json은 javascript object이긴하나 string으로 취급되기 때문에 우리가 object만들 때도 ""로 해주자!
// const ob = {
//     name : 'Daniel',
//     age : 20,
//     description : 'I go to school.',
// };

// fs.writeFileSync("./node_js/test.json", JSON.stringify(ob, null, 2));