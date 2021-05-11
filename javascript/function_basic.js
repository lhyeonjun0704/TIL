// 함수 선언
function doSomething(add){
    console.log(add);
}

function add(a, b){
    const sum = a + b;
    return console.log(sum);
}

// 함수 호출
doSomething(); 

add(1, 2);

doSomething(add(2, 4));