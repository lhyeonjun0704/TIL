// AJAX? Asynchronous Javascript And XML
// XMLHttpReuqest 
// JSON!!! object에 관한 것!
// 데이터를 주고 받을 때 쓰는 포맷이고,
// 텍스트를 기반한 가볍고, 읽기 편하며, key-value로 이뤄짐.
// 네트워크와 데이터 주고 받을 때 serialization 할 때 씀.
// 직렬화하고, 데이터 전송하며, 언어에 상관 없이 쓸 수 있습니다.!
// 공부방향 1.serialize 2. deserialize

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); //"" 규격!

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(this.name +' can jump!');
    },
};

json = JSON.stringify(rabbit);
console.log(json); 
// 함수나 심볼같은 자스에만 잇는 것들은 제외대고 들어간다.

json = JSON.stringify(rabbit.name);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log('key:'+ key + ' value: ' + value);
    return value;
});

// 2. JSON to Object
// parse()

json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) =>{
    console.log('key : ' + key + ' value : ' + value);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();  occured error!

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate);

// JSON Diff.com  이 사이트에서 문제 디버깅할 때 유용함
// JSONBeautifier.org 포맷 변경 유용
// JSON Parser  JSON타입을 object 타입으로 볼 수 있어.
// JSON Validator  JSON이 유요한지 확인을 할 수 있어 유용.
