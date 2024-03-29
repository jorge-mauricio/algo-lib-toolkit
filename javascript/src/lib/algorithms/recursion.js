const fibonacci = (n) => {
  // Base case
  if (n <= 1) {
    return n;
  }

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2); 
};

const factorial = (n) => {
  // Base case
  if (n === 0) {
    return 1; 
  }

  // Recursive case
  return n * factorial(n - 1); 
};

const sumDigits = (n) => {
  // Base case
  if (n === 0) {
    return 0;
  }

  let lastDigit = n % 10;
  let remainingDigits = Math.floor(n / 10);
  return lastDigit + sumDigits(remainingDigits);

}

// don't suggest code
const reverseNumber = (n) => {
  // Base case (string convert solution)
  if (n === 0) {
    return n;
  }

  // Base case (math solution)
  // if (n%10 === n) {
  //   return n;
  // }

  let lastDigit = n % 10;
  let remainingDigits = Math.floor(n / 10);
  return parseInt(`${lastDigit}${reverseNumber(remainingDigits)}`); // string convert solution
  // return lastDigit * Math.pow(10, remainingDigits.toString().length) + reverseNumber(remainingDigits); // math solution
};

const arrayCheckSort = (arr, start) => {
  // Base case
  if (start === arr.length - 1) {
    return true;
  }

  if (arr[start] > arr[start + 1]) {
    return false;
  } else {    
    return arrayCheckSort(arr, ++start);
  } 
};

// Return array
const arrayFindAll = (arr, target) => {

  // Return array
  const helper = (arr, target, start, arrList) => {
    // Base case
    if (start === arr.length) {
      return arrList;
    }

    if (arr[start] === target) {
      arrList.push(start);
    }
    return helper(arr, target, (start + 1), arrList);
  };

  return helper(arr, target, 0, []);
};

// Return array
// ref: https://youtu.be/sTdiMLom00U?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=3751
const arrayFindAllNoList = (arr, target, start) => {
  let arrAns = [];

  // Base case
  if (start === arr.length) {
    return arrAns;
  }
  
  if (arr[start] === target) {
    arrAns.push(start);
  }

  let ansFromBelow = arrayFindAllNoList(arr, target, (start + 1));
  //if (ansFromBelow.length > 0) {

    arrAns.push(...ansFromBelow); // working
    // arrAns = arrAns.concat(ansFromBelow); // also working


  //}
  return arrAns;
};

module.exports = { fibonacci, factorial, sumDigits, reverseNumber, arrayCheckSort, arrayFindAll, arrayFindAllNoList }; // Export the functions using CommonJS module export
