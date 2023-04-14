// 1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumOfEvenNumbers(numbers) {
    let evennumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evennumbers.push(numbers[i]);
        }
    }
    return evennumbers.reduce((number1, number2) => number1 + number2, 0);
}
let result = sumOfEvenNumbers(numbers);
console.log(result);


// 8. Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.

function productOfAllNumbers(numbers) {
return numbers.reduce((number1, number2) => number1 * number2)
    
}

    let product = productOfAllNumbers(numbers)
console.log(product)

    
// 4. Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
function averageOfAllNumbers(numbers) {
    let sum = numbers.reduce((number1, number2) => number1 + number2 )
    let average = sum / numbers.length
    
    return average
}
let avg = averageOfAllNumbers(numbers);
console.log(avg)


// 2. Write a function that takes a string as input and returns the number of vowels in the string.

let stg = "the rising coders"
function numberOfVowels(stg) {
    let reg = /[aeiou]/gi
    let matches = stg.match(reg)
    return matches ? matches.length : 0
    
}
console.log(numberOfVowels(stg))


// 3. Write a function that takes an array of strings as input and returns the length of the longest string in the array.

let array = ["hasnain" , "faisal", "umer"]
function lengthOfLongestString(array) {
    let maxlength = array.reduce((value1, value2) => {
    return value1.length > value2.length ? value1 : value2
    })
    return maxlength.length

}
console.log(lengthOfLongestString(array))

// 7. Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.

let rep_array = ["mern", "stack", "developer", "mern", "developer", "stack"]
function uniquesrtng(rep_array) {
    let uniquestring = [... new Set(rep_array)]
    return uniquestring
}

console.log(uniquesrtng(rep_array))

// 5. Write a function that takes an object as input and returns an array of all the keys in the object.

let person_array = {
    name: "sir muzammil bilwani",
    profession: "developer",
    resident: "karachi"
}
function allTheKeys(person_array) {
    let keysarray = Object.keys(person_array)
    return keysarray
}
 
console.log(allTheKeys(person_array))

// 6. Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.
let objct1 = {
    name: "sir muzammil bilwani",
    profession: "developer",
    resident: "karachi"
  };
  let objct2 = {
    name: "sir mudassir bilwani",
    profession: "statician",
    resident: "faisalabad"
  };
  let objct3 = {
    name: "sir mudabbir bilwani",
    profession: "scientist",
    resident: "islamabad"
  };
  let arrOfObject = [objct1, objct2, objct3];
  
  function extractValues(arr, key) {
    return arr.map((obj) => obj[key]);
  }
  
  console.log(extractValues(arrOfObject, 'resident'));
  