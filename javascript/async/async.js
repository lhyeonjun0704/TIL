'use strict';

// promise나 async는 써야 할 때가 다르다.
// async & await

// 1. async
async function fetchUser(){ // 자동으로 promise로 쓸 수 있게 해주는 것이다.
    // do network request in some secs...
    return 'LHJ';
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return '사과';
}

async function getBanana(){
    await delay(1000);
    return '바나나';
}

// 밑과 같이 체인을 만드는 것 보다 await을 쓰면 편리함.
// function getBanana(){
//     return delay(3000)
//     .then(()=> '바나나');
// }

// function pickFruits(){
//     return getApple()
//     .then(apple => {
//         return getBanana().then(banana => apple + banana);
//     });
// }
// 밑의 코드 처럼 바꾸자

async function pickFruits(){
    // 이런식으로 바나나와 사과가 연관이 없을 때 순서대로 받아 올
    // 필요가 없기 떄문에 Promise로 같이 실행 할 수 있게 만들 수 있다.
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return apple + " + " + banana;
}

pickFruits().then(console.log);

// 3. Useful Promise APIs
function pickAllFruits(){
    // Promise.all()은 모든 Promise들을 병렬적으로 모아주는 함수이다. 
    return Promise.all([getApple(), getBanana()]) // 배열로 받아서
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    // race()는 받은 promise중에 제일 처음 값을 리턴한다.
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

