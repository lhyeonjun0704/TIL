// objects
// one of the Javscript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javcripts are instances of Object

// object 만드는 방법은 두가지가 있따.
const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const LHJ = {name: 'LHJ', age: 4};
print(LHJ);

LHJ.hasJob = true; // 추후에 추가도 가능함
console.log(LHJ.hasJob);

delete LHJ.hasJob; //이렇게 추후에 지우는 것도 가능...


// 2. Computed properties
// key should be always string
console.log(LHJ.name);
console.log(LHJ['name']); //이런식의 접근도 가능
LHJ['hasJob'] = true;
console.log(LHJ.hasJob);

function printValue(obj, key){
    console.log(obj[key]); // 무조건 이렇게 써야됩니다. 
}
printValue(LHJ, 'name');

// 3. property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};

function makePerson(name, age){
    return{
        name, // this랑 key 생략이 가능하다.
        age,
    };
}

const person4 = makePerson('JBK', 28); // 이런식으로 생성가능


//하지만 이렇게 보통 만듭니다.

// 4. Constuctor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
}

const person4 = new Person('JBK', 26);


// 5. in operator : property existence check (key in obj)
console.log('name' in LHJ);
console.log('random' in LHJ);

// 6. for.. in vs for .. of
// for (key in obj)
for (key in LHJ){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning
const user = {name: 'LHJ', age: '28'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

// these days
const user4 = {};
Object.assign(user4, user);
const user4 = Object.assign({}, user);

console.log(user4);