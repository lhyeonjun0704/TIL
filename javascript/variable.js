/* 유연한 언어인데, 아주 위험하기도 하다. */
/* ECMAScript 5에 있는데... 문법이나 규정 제대로 점검해주는 것? */
'use strict';

/* let 변수! ES6 */
{
let name = 'LHJ';
console.log(name);
}
/* var을 이제 안쓰는데 그 이유는 선언을 먼저하기전에... 블럭을 무시하는 선언이다. */
/* hoisting (최고 위로 올려서 선언해주는거) */


/* 3. constant 한번 선언하면 변하지 않는 값 추후에도 값을 바꿀 수 없다. */
/* security, thread safety, reduce human mistakes 등의 장점들이 있다. */


/* 4. Variable types * let a: number = 1;/
/* 숫자를 0으로 나누면 infinity , 음수를 0으로 나누면 negativeInfinity,  nAn = not A number */
/* number는 -2*53 ~ 2*53 까지 가능하고 숫자 뒤에 n붙이면 bigint라는 값으로 보입니다. */
/* string으로 가능하고 '+' 기호로 문자열 이을 수 있어 template literals 로 그대로 출력 가능 */
/* symbol 동일한 string을 작성했어도 다른 symbol(고유한 심볼)로 만들어준다. 같은걸로 만들때는 .for 붙이면 된다. */
/* object 객체 real-object/ function은 다음시간 */


/* 5. Dynamic typing: dynamically typed language */
