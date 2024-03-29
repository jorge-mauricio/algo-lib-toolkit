// Instructions
// Terminal: node src/lib/patterns/index.js
// ref: https://youtu.be/lsOOs5J8ycw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ

const { pattern1 } = require('./basic.js');
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
console.log('pattern1(5):');
pattern1(5);


// Import the pattern1 function from the basic.js file
const { pattern2 } = require('./basic.js');

// *
// * *
// * * *
// * * * *
// * * * * *
console.log('pattern2(5):');
pattern2(5);

// Import the pattern1 function from the basic.js file
const { pattern3 } = require('./basic.js');

// * * * * *
// * * * *
// * * *
// * *
// *
console.log('pattern3(5):');
pattern3(5);




// Import the pattern1 function from the basic.js file
const { pattern4 } = require('./basic.js');

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
console.log('pattern4(5):');
pattern4(5);



// Import the pattern1 function from the basic.js file
const { pattern5 } = require('./basic.js');

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
console.log('pattern5(5):');
pattern5(5);



// Import the pattern1 function from the basic.js file
const { pattern28 } = require('./basic.js');

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
console.log('pattern28(5):');
pattern28(5);



// Import the pattern1 function from the basic.js file
const { pattern30 } = require('./basic.js');


console.log('pattern30(5):');
pattern30(5);


// Import the pattern1 function from the basic.js file
const { pattern3Recursive, pattern3RecursiveString } = require('./recursion.js');

// * * * * *
// * * * *
// * * *
// * *
// *
console.log('pattern3Recursive(5):');
console.log(pattern3Recursive(5, 0));

console.log('pattern3RecursiveString(5):');
console.log(pattern3RecursiveString(5, 0));



