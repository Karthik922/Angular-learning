// Basic Types
let id: number =5
let company: string = 'Innoart technologies'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'Hello']

//tuple

let person: [number, string, boolean] = [1, 'Brad', true]

//tuple array
let employee: [number, string][]

employee = [
    [1, 'Karthik'],
    [2, 'Gokul'],
    [3, 'Ragul']
]

//Union
let pid: string | number
pid = '22'

//Enum
enum Direction1 {
    Up =1,
    Down,
    Left,
    Right,
}
enum Direction2 {
    Up ='Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
//console.log(Direction2.Up)

type User = {
    id: number,
     name: string
    }

const user: User = {       //instead of  user:{id:number, name:string} 
     id: 1,
    name: 'Karthik '
}



//Type Assertion
let cid: any = 1
//let customerId = <number>cid //same result
let customerId = cid as number  //same result

//functions
function addNum(X: number, Y: number): number{
    return X + Y
}

//console.log(addNum(1,2))

function log(message: string | number): void{
    console.log(message)
}

//Interfaces

interface UserInterface {
    readonly id: number
    name: string
    age?: number //optional
}

const user1: UserInterface = {
    id: 1,
    name: 'Karthik',
}

interface MathFunc {
    (x: number, y:number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface{
    id: number
    name : string
    register(): string
}

//Classes

class Person implements PersonInterface
{
    id: number
    name: string

    constructor(id: number, name: string){
        //console.log(123);
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registered`
    }
}
const brad = new Person(1,'Karthik')
const mike = new Person(2,'Gokul')

//console.log(brad.register())

//subclass

class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }

}

const emp = new Employee(3,'Karthik','Associate Software Developer')
console.log(emp.register());


//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Karthik', 'Arun', 'Gokul'])

strArray.push('helloa')