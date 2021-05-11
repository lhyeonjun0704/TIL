'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration 같은 선언이 제일 위로 감!
console.log('1');
// setTimeout(function(){ // 1000ms 뒤에 나온다!
//     console.log('2');
// }, 1000); // 1000ms는 1초
//밑에처럼 좀 짜자!
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback 즉각적인 콜백
// 자동으로 함수 선언이 hoisting 됨.
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));

// Asynchronous callback 후에 언제 나타날지 모를 콜백
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('asnyc callback'), 2000);

// callback hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'LHJ' && password === 'dream') ||
                (id === 'coder' && password === 'dev')
            ) {
                onSuccess(id);
            } else{
                onError(new Error('not found!'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'LHJ'){
                onSuccess({name: 'LHJ', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user)=>{
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert('hello ' + userWithRole.name + 'you have a ' + userWithRole.role);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {console.log(error)}
);