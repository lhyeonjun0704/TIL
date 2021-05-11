'use strict';
// data structure?
// 1. Array Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);

// 3. Looping over an array
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

// forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push, pop, 

fruits.push('오렌지', '딸기');
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('멜론', '수박');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// shift, unshift는 pop, push보다 느리다. 
fruits.splice(0, 2);
console.log(fruits);

// combine two arrays
const fruits2 = ['망고', '아보카도'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching find!
console.log(newFruits.indexOf('망고'));
console.log(newFruits.includes('아보카도'));

// lastIndexOf
newFruits.push('망고');
console.log(newFruits.indexOf('망고'));
console.log(newFruits.lastIndexOf('망고'));