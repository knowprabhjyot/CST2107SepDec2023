// When we talk about typescript and Javascript
// Javascript is weakly typed language and typescript is strongly typed language
// Javascript
var userName = "Prabh";
// userName = 28;
// userName = false; 
// So in the above example, i can store either a boolean, string or number in the same variable
console.log('userName', userName);
// Typescript
var user = "Prabh";
var age = 28;
var isHappy = true;
var myBirthdayDate = new Date();
// user = 'Mike';
// String[]
var fruitList = ['Apple', 'Banana', 'Orange'];
// Functions
// This is Javascript
// function sum(num1, num2) {
//     return num1 + num2;
// }
// This is Typescript
function sum(num1, num2) {
    return num1 + num2;
}
// What is void ? When we dont return anythbing from our function we use the type as void
function printMyName(name) {
    console.log(name);
}
// How can we keep parametsr as optional ?
function greetUser(firstName, lastName) {
    var fullName = lastName ? "".concat(firstName, " ").concat(lastName) : "".concat(firstName);
    console.log("Hey how are you doing ".concat(fullName));
}
greetUser('Mike', 'Edwards');
// Arrays in Typescript
var myFruits = ['Apple', 'Banana', 'Orange'];
var myNumbers = [1, 2, 3, 4, 5];
// This is another way of creating Arrays in Typescript (Type Assertion)
var myMarks = [10, 20, 30, 40, 50];
// How can we store different type of values in an array ?
var mixedArray = ['Apple', 10, true];
// How can we store any type of values
var anyArray = ['Apple', 10, true, {}, [], function () { }];
// We never recommend ANY type in Typescript
// Typescript Tuples
var studentDetails = ['Prabh', 28];
// Objects in Typescript
var car = {
    make: "BMW",
    model: "X5",
    year: 2019
};
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
var carArray = Object.entries(car).map(function (_a) {
    var key = _a[0], value = _a[1];
    return [key, value];
});
// Type Inference - You don't need to specify the type of the variable : [string, string | number] as it is inferred from the object
var carArray2 = Object.entries(car).map(function (_a) {
    var key = _a[0], value = _a[1];
    return [key, value];
});
// Enums in Typescript
var DAYS;
(function (DAYS) {
    DAYS["MONDAY"] = "MONDAY";
    DAYS["TUESDAY"] = "TUESDAY";
    DAYS["WEDNESDAY"] = "WEDNESDAY";
    DAYS["THURSDAY"] = "THURSDAY";
    DAYS["FRIDAY"] = "FRIDAY";
    DAYS["SATURDAY"] = "SATURDAY";
    DAYS["SUNDAY"] = "SUNDAY";
})(DAYS || (DAYS = {}));
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["ORANGE"] = 1] = "ORANGE";
    COLORS[COLORS["GREEN"] = 2] = "GREEN";
    COLORS[COLORS["YELLOW"] = 3] = "YELLOW"; // 3
})(COLORS || (COLORS = {}));
console.log(COLORS.YELLOW);
// Using ENums as a return Type
function getDay(day) {
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
            return DAYS.SUNDAY;
    }
}
// If you want to create your own custom Logger
// console.log('hello')
// console.error()
// console.warn()
var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL["TRACE"] = "TRACE";
    LOG_LEVEL["INFO"] = "INFO";
    LOG_LEVEL["ERROR"] = "ERROR";
    LOG_LEVEL["WARN"] = "WARN";
    LOG_LEVEL["DEBUG"] = "DEBUG";
    LOG_LEVEL["LOG"] = "LOG";
})(LOG_LEVEL || (LOG_LEVEL = {}));
function logger(logLevel, message) {
    var TIME_STAMP = new Date().toISOString();
    console[logLevel](TIME_STAMP, message);
}
logger('error', 'This is a error message');
