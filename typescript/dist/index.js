"use strict";
// Basic Types
let id = 5;
let company = 'Innoart technologies';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//tuple
let person = [1, 'Brad', true];
//tuple array
let employee;
employee = [
    [1, 'Karthik'],
    [2, 'Gokul'],
    [3, 'Ragul']
];
//Union
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Karthik '
};
//Type Assertion
let cid = 1;
//let customerId = <number>cid //same result
let customerId = cid; //same result
//functions
function addNum(X, Y) {
    return X + Y;
}
//console.log(addNum(1,2))
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Karthik',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        //console.log(123);
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Karthik');
const mike = new Person(2, 'Gokul');
//console.log(brad.register())
//subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Karthik', 'Associate Software Developer');
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Karthik', 'Arun', 'Gokul']);
strArray.push('hello');
