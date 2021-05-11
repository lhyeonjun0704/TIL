// 1. make a string in array
const fruits = ['사과', '바나나', '오렌지'];
const result = fruits.join('and');
console.log(result);

// 2. make an array out of a string
const fruits2 = '사과, 바나나, 오렌지';
const result2 = fruits2.split(',');
console.log(result2);

// 3. make this array look like this : [5, 4, 3, 2, 1]
const arr1 = [1, 2, 3, 4, 5];
const result3 = arr1.reverse(); // 깊은 복사로 됨.
console.log(result3);

// 4. make new array without the first two elements
const arr2 = [1, 2, 3, 4, 5];
const result4 = arr2.slice(2, arr2.length+1);
console.log(result4);

// 5. class!
class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// 6. find a student with the score 90
const result5 = students.find((student) => student.score === 90);
console.log(result5);

// 7. make an array of enrolled students
const result6 = students.filter((student) => student.enrolled === true);
console.log(result6);

// 8. make an array containing only the students' scores
const result7 = students.map((student) => student.score);
console.log(result7);

// 9. check if there is a student with the score lower than 50
const result8 = students.some((student) => student.score <= 50);
console.log(result8);

//every는 모든 조건이 만족하느냐 판별할 때 사용한다.
const result8_1 = students.every((student) => student.score <= 50);
console.log(result8_1);

// 10. compute students' average score
const result9 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result9 / students.length);

// 11. make a string containing all the scores
const result10 = students.map(student => student.score).join();
console.log(result10);

// 12. sort
const result11 = students.map(student => student.score)
.sort((a, b) => a-b).join();
console.log(result11);