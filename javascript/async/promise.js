'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 확인점 1) State 2) Producer/Consumer 차이점 알기
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.!!!!!!!
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('LHJ');
        //reject(new Error('no!'));
    }, 2000);
});

// 2. Consumer: then, catch, finally
promise.then(value => {
    console.log(value);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{console.log('finally!')}); // 성공 여부에 상관없이 실행


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num=>num*2)
.then(num=> num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Hnadling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('error ! ' + hen + ' => 알 ')), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(egg + ' => 프라이'), 1000);
    });

getHen() //
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log);


