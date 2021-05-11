/* function name(pa1, par2){ body.... return;} */
/* 함수는 한가지의 일만 할 수 있게 만들어야 함 */

/* default parameters */
function showMessage(message, from){
    console.log('${message} by ${from}');
}
showMessage('hi!');

/* 4. Rest parameters */
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    /* for (const arg of args){
        console.log(arg);
    }  이것도 루프대신 사용 가능하다*/
}
printAll('dream', 'coding', 'LHJ');

/* 5. local scope */
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(message){ /* 부모-자식 간의 관계도 동일하다. */
        console.log(message);
        let chil
    }
}
printMessage(); /* 오류 발생 */

/* 7. Early return, early exit */
function upgradeUser(user){
    if(user.point > 10){
        /*long upgrade logic... 아닐 때 빨리 리턴해서 함수 끝내라 */

    }
}

/* First-class function */
const print = function(){ /*anonymous function */
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

/* callback function using function expression */
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}

/* Arrow function */
const simplePrint = function(){
    console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint!'); /* 이렇게 간단하게 만들어 줄수 있는 것이다! */

/* IIFE: Immediately Invoked Function Expression */
(function hello(){
    console.log('IIFE');
})(); /* 이렇게하면 바로 함수를 실행할 수 있다. */
