// When we talk about typescript and Javascript
// Javascript is weakly typed language and typescript is strongly typed language

// Javascript
let userName = "Prabh"; 
// userName = 28;
// userName = false; 
// So in the above example, i can store either a boolean, string or number in the same variable

console.log('userName', userName);

// Typescript
let user: string = "Prabh";
let age: number = 28;
let isHappy: boolean = true;
let myBirthdayDate: Date = new Date();
// user = 'Mike';

// String[]

let fruitList: string[] = ['Apple', 'Banana', 'Orange'];

// Functions

// This is Javascript
// function sum(num1, num2) {
//     return num1 + num2;
// }

// This is Typescript
function sum(num1: number, num2: number): number {
    return num1 + num2;
}

// What is void ? When we dont return anythbing from our function we use the type as void
function printMyName(name: string): void {
    console.log(name);
}

// How can we keep parametsr as optional ?
function greetUser(firstName: string, lastName?: string): void {
    const fullName = lastName ? `${firstName} ${lastName}` : `${firstName}`;
    console.log(`Hey how are you doing ${fullName}`);
}

greetUser('Mike', 'Edwards');


// Arrays in Typescript

let myFruits: string[] = ['Apple', 'Banana', 'Orange'];

let myNumbers: number[] = [1, 2, 3, 4, 5];

// This is another way of creating Arrays in Typescript (Type Assertion)
let myMarks: Array<number> = [10, 20, 30, 40, 50];

// How can we store different type of values in an array ?

let mixedArray: (string | number | boolean)[] = ['Apple', 10, true];

// How can we store any type of values
let anyArray: any[] = ['Apple', 10, true, { }, [], function() {}];

// We never recommend ANY type in Typescript


// Typescript Tuples

let studentDetails: [string, number] = ['Prabh', 28];

// Objects in Typescript

let car: { make: string, model: string, year: number} = {
    make: "BMW",
    model: "X5",
    year: 2019
}

// This throws an error because it doesn't exist in the above type declared for that object
// car.age = 20;


// Object Functions
// Object.keys 
// [ 'make', 'model', 'year' ]

// Object.values
// [ 'BMW', 'X5', 2019 ]


// Object.entries
// [['make', 'BMW'], ['model', 'X5'], ['year', 2019]]

// How we use objects to render on the UI in react
// Object.entries(car).map()


const carArray = Object.entries(car).map(([key, value]: [string, string | number]) => {
    return [key, value];
})


// Type Inference - You don't need to specify the type of the variable : [string, string | number] as it is inferred from the object
const carArray2 = Object.entries(car).map(([key, value]) => {
    return [key, value];
})

// Enums in Typescript

enum DAYS {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY'
}


enum COLORS {
    RED, // 0
    ORANGE, // 1
    GREEN, // 2
    YELLOW // 3
}
console.log(COLORS.YELLOW);


// Using ENums as a return Type
function getDay(day: number): DAYS {
    switch (day) {
        case 0:
            return DAYS.MONDAY;
        case 1:
            return DAYS.TUESDAY;
        case 2:
            return DAYS.WEDNESDAY;
        case 3:
            return DAYS.THURSDAY;
        case 4: 
            return DAYS.FRIDAY;
        case 5:
            return DAYS.SATURDAY;

        default:
            return DAYS.SUNDAY
    }
}

// If you want to create your own custom Logger

// console.log('hello')
// console.error()
// console.warn()

enum LOG_LEVEL {
    TRACE = 'TRACE',
    INFO = 'INFO',
    ERROR = 'ERROR',
    WARN = 'WARN',
    DEBUG =     'DEBUG',
    LOG = 'LOG'
} 

function logger(logLevel: LOG_LEVEL, message: string): void {
    const TIME_STAMP = new Date().toISOString();
    console[logLevel](TIME_STAMP, message);
}

logger('error' as LOG_LEVEL, 'This is a error message');

// UNIONS

let myAge: string | number = 29;
myAge = '29' as string;


function calculateAverageMarks(marksList: (number | string) []): number {
    let total  = 0;
    marksList.forEach((mark) => {
        total += mark as number;
    })

    return total;
}

// Type References

type Employee  = { 
    name: string,
    empId: string,
    age: number,
    department: string;
    dateJoined: Date;
}

let employee1: Employee = {
    name: 'Mike',
    age: 29,
    empId: 'EMP001',
    department: 'IT',
    dateJoined: new Date(),
}

// Partials in Types - allows us to inherit from an existing type and keep it as optional
type FoodEmployee = Partial<Employee>

let foodEmployee: FoodEmployee = {
    name: "Daniel",
    dateJoined: new Date()
}

let foodEmployee2: FoodEmployee = {
    empId: 'EMP2000'
}


// Interfaces
interface Product {
    name: string;
    price: number | string;
    description?: string;
    category: Category;
    quantity: number;
    calculateProductRating: () => number;
}

interface Category {
    name: string;
    id: string;
}

const product1: Product = {
    name: 'Tshirt',
    price: 20,
    category: {
        id: '1',
        name: 'Polo'
    },
    quantity: 200,
    calculateProductRating: function() {
        return 5;
    }
}


// When we want to choose from an existing type

type People = {
    name: string;
    age: number;
    address: string;
}

type Manager = Pick<People, 'address' | 'name'>

let myManager: Manager = {
    name: 'mike',
    address: 'Vancouver',
}


// Records in Typescript
type level = 'TRACE' | 'INFO' | 'ERROR' | 'WARN' | 'DEBUG' | 'LOG';
type LogLevel = Record<level, string>;

let logLevel: LogLevel = {
    TRACE: 'TRACE',
    INFO: 'INFO',
    ERROR: 'ERROR',
    WARN: 'WARN',
    DEBUG: 'DEBUG',
    LOG: 'LOG'
}

// Omit in Typescript

type Product2 = {
    name: string;
    price: number;
    description: string;
    category: string;
    quantity: number;
}

type Product3 = Omit<Product2, 'description' | 'quantity'>;