multiply(2, 4); // This will return 8, because of hoisting

function multiply(a, b) {
    return a * b;
}

// -----

multiply2(2, 4); // reference error since we are using const

const multiply2 = (a, b) => {
    return a * b;
}

// -----

multiply3(2, 4); // reference error since we are using let

let multiply3 = (a, b) => {
    return a * b;
}


// Function vs Arrow Function

var newName = "Prabh Gambhir"
let object = {
    newName: "Daniel",
    getName: function() {
      return this.newName;
    }
  }

object.getName() // Daniel, because I am using regular functions where the current context (THIS)
// is the object

let object2 = {
    newName: "Daniel",
    getName: () => {
      return this.newName;
    }
  }

object2.getName() // Prabh Gambhir, because I am using arrow functions where the current context  (THIS)
// becomes the global object which is window object


// Another Example


let object3 = {
    newName: "Daniel",
    getName: function() {
      return this.newName;
    },
    city: "Vancouver",
    address: {
      city: "Montreal",
      getCity: function() {
          return this.city;
      }
    }
  }

  object3.address.getCity() // Montreal


  let object4 = {
    newName: "Daniel",
    getName: function() {
      return this.newName;
    },
    city: "Vancouver",
    address: {
      city: "Montreal",
      getCity: () => {
          return this.city;
      }
    }
  }

  object4.address.getCity() // undefied, because there is no city in global object


//   HIGHER ORDER FUNCTIONS

let employeeList = [
    {
        name: "Prabh",
        id: 200,
        department: "CST",
        courses: [100, 200, 300, 400],
        gratuity: true
    },
    {
        name: "Daniel",
        id: 201,
        department: "Business",
        courses: [101, 201, 301, 401],
        gratuity: false
    },
    {
        name: "Mike",
        id: 202,
        department: "Science",
        courses: [1101],
        gratuity: true
    },
    {
        name: "Judy",
        id: 203,
        department: "CST",
        courses: [300, 400],
        gratuity: true
    }
]


// If you want to filter something based on given ID you use Filter function (HOF)


// If you want to change ID of all ids inside arrays to a string we can use map function (HOF)


let isEveryOneEligibleForGratuity = employeeList.every(employee => employee.gratuity)

let atleastOneHasGratuity = employeeList.some(employee => employee.gratuity);


// Reduce

let array = [1,2,3,4];

function sumOfArray(array) {
    let sum = 0;
    for (let i = 0 ; i < array.length; i++) {
        sum+= array[i];
    }

    return sum;
}
// acc = 0
let sumValue = array.reduce((acc, cV) => {
    return acc + cV;
}, 0)


// Find the sum of all the values inside this array

let newArray = [1,2,3, [ 4,5,6]]

// [1,2,3, [4,5,[6,7, [20, 30]]]]
function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i])) {
            sum+= array[i];
        } else {
            for (let j = 0; j < array[i].length; j++) {
                sum+= array[i][j];
            }
        }
    }

    return sum;
}

let deepNestedAray = [1, [4,5,[6,7, [20, 30]]]]

function deepNestedSum(array) {
    let sum = 0;
    for (let i = 0 ; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += deepNestedSum(array[i])
        } else {
            sum += array[i];
        }
    }

    return sum;
}

// sum = 1
// 1 + deepNestedSum([4,5,[6,7, [20, 30]]])
// 1 + deepNestedSum([4,5,[6,7, [20, 30]]]) + 9
// 10 +  deepNestedSum([6,7, [20, 30]]) + 13
// 23 + deepNestedSum([20, 30])
// 23 + 50 = 73

deepNestedSum(deepNestedAray);



// Spread & Rest operators

function sum(a, b, c) {
    return a + b + c;
}

sum(20, 40, 60); // 120

sum(20) // 20
 
sum(20, 40) // 60

sum(1,2,3,4,5,6,7); // 

// Rest Operator
function sumWithRest(...nums) {
    let sum = 0;
    for (let i = 0 ; i< nums.length; i++) {
        sum =  nums[i] + sum;
    }

    return sum;
}
 
// Spread Operator

Math.max(1, 2, 4, 5)

let array2 = [2,3,4,5,6,7,-10]

Math.max(...array2) 


// Another Example arrays
let a = [1,2,3,4]
let b = [5,6,7,8]

let c = [...a, ...b] // Used to concatenate arrays

// Another example objects

let student = {
    name : "Prabh",
    college: "VCC"
}

let address = {
    city: "vancouver",
    province: "BC"
}

let prabh = {
    ...student,
    ...address
}

