const pattern3Recursive = (n, row) => {
  let ans = [];
  
  // Base cases
  if (row >= n) {
    return ans;
  }
  
  // ans.push([]);
  //if (!ans[row]) {
  ans[row] = [];
  // ans[row] = [[], []];
  console.log('ans', ans);
  //}
  for (let col = n; col >= row; col--) {
    console.log('row', row, 'col', col);
    ans[row].push('*');
  }

  let ansFromBelow = pattern3Recursive(n, (row + 1));
  // ans.push(...ansFromBelow);

  return [ans, ...ansFromBelow];
};

// // ChatGPT version (working):
// const pattern3Recursive = (n, row = 0) => {
//   // Base case
//   if (row === n) {
//     return [];
//   }

//   // Create a row with '*' repeated (n - row) times
//   let currentRow = new Array(n - row).fill('*');
//   // Note: replaced the loop

//   // Get the rows from the recursive call
//   let rowsFromBelow = pattern3Recursive(n, row + 1);

//   // Return the current row followed by the rows from the recursive call
//   return [currentRow, ...rowsFromBelow];
// };

// Indian version:
// ref: https://youtu.be/ymgnIIclCF0?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=682
const pattern3RecursiveString = (row, col) => {
  let ans = '';
  // Base case
  if (row === 0) {
    return ans;
  }

  // Recursively call the function with row - 1 and col - 1
  if (col > 0) {
    // pattern3Recursive(row, col + 1);

    ans += '*';
    //return ans;
    pattern3RecursiveString(row, col + 1);
  } else {
    //return ans;
    ans += '\n';
    pattern3RecursiveString(row - 1, 0);
  }  

  return ans;
};


module.exports = { pattern3Recursive, pattern3RecursiveString }; // Export the function using CommonJS module export