/* 1. class declarations */
class Person{
    /* constructor */
    constructor(name, age){
        /* fields */
        this.name = name;
        this.age = age;
    }
    /* methods */
    speak(){
        console.log('${this.name}: hello!');
    }
}

const lhj = new Person('hj', 28);
console.log(lhj.name); /* hj */
console.log(lhj.age); /* 28 */
lhj.speak(); /* hj: hello! */

/* 2. Getter and setters */
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); /* 이 음수를 피하기 위해서 쓴다 */

/* 3. Fields (public, private) */
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

/* 4. Static properties and methods */
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); /* static은 클래스 자체에 붙어 있는 것이기 때문에 값이 할당되지 않았다고 나옴. */
console.log(Article.publisher); 
Article.printPublisher();

/* 5. Inheritance 상속 */
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log('drawing ${this.color} color!');
    }

    getArea(){
        return this.width * this.height;
    }
}

/* extends 상속가지고 다른 클래스의 값 그대로 쓸수 있음 */
class Rectangle extends Shape{}
class Triangle extends Shape{
    /* Overriding */
    getArea(){
        return (this.width * this.height) / 2; /* 이렇게 따로 써서 바꿀 수도 있다. */
    }
    draw(){
        super.draw(); /* super로 부모에 있는 것도 같이 쓸 수 있다. */
        console.log('trangle!');
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); 
const triangle = new Triangle(20, 20, 'red');
triangle.draw();


/* 6. class checking instanceOf */
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); /* True */