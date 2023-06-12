// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
//  ReferenceError: codedMessage is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

const codedMessage = (string) => {
    return string
    .replace(/a/g, "4")
    .replace(/E|e/g, "3")
    .replace(/i/g, "1")
    .replace(/o/g, "0")
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// Pseudo code:
// 1. Create a function called codedMessage. Takes 1 parameter called string.
// 2. Use built-in method .replace() to return a new string replacement. We can chain this method.
    //2a. Takes two arguments. First argument takes in a string or expression, searches for what's within the string. Second argument, will replace the matched string or expression that is in the first argument.
    //2b. Within the first parameter, use /"substring that needs to be replaced" and use /g that specifies that all matches should be replaced.
// 3. Replace a,E,e,i,o => "4","3","3","1","0" Numbers are in string because .replace() returns a string. For E|e signals logical OR.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("particularArray", () => {
    it("returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(particularArray(fruitArray, filterLetterA)).toEqual(expect.arrayContaining(["Mango", "Apricot", "Peach"]))
      expect(particularArray(fruitArray, filterLetterE)).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
    })
})

// ReferenceError: particularArray is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

const particularArray = (array, singleLetter) => {
    return array.filter(value => {
     return value.includes(singleLetter) || value.includes(singleLetter.toUpperCase())
   })
}
//  Test Suites: 1 passed, 1 total
//  Tests:       2 passed, 2 total

// Pseudo code:
// 1. Create a function called particularArray. Two parameters called, array, singleLetter.
// 2. Iteration with HOF .filter to see if the value has the substring "a,A,e".
// 3. Use built-in methods .includes(), logical operator ||, .toUpperCase(). *Uppercase B/C there's a substring with "A".

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudo code:

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("determines if the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
      expect(fullHouse(hand4)).toEqual(true)
    })
})

// fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
  //.reduce() iterates over each element and does reduction operation.
    let count = array.reduce((howMany, number) => {
      //retrieves current count of number from HowMany in +1 increments. || is used for a false value treating it as 0. 
      howMany[number] = (howMany[number] || 0) + 1
      return howMany
      //intial value is empty object
    }, {})
    // object.values(count) returns an array of the objects enumerable/truthy values. count is our object stated above.
    const howManyNumbers = Object.values(count)
    //checks the array if it includes 2 and 3.
    return howManyNumbers.includes(2) && howManyNumbers.includes(3)
}
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// Pseudo code:
// 1. Create a function called fullHouse. Takes 1 parameter called array.
// 2. Declare a new variable called count. Stores tallies of a number.
// 3. Use HOF .reduce(), takes two arguments called howMany and number, for iteration to check how many times a number occurs. Set inital value to empty object {}.
// 4. Declare new variable called howManyNumbers. Call upon the Object with built in method .values(count) to extract the counts of the values. This will be stored in an array.
// 5. use built in method .includes() to check if the stored tally is 2 or 3, use logical operator && for a boolean value.
