const subsetsUnique = (nums) => {
  // Initialize the list that will store all subsets
  const list = [];
  
  // Sort the numbers (not strictly necessary for subset generation, but
  // maintains consistency with the original Java code and can be useful
  // for certain variations of the subset problem)
  nums.sort((a, b) => a - b);
  
  // Start the backtracking algorithm with an empty subset
  backtrackUnique(list, [], nums, 0);
  return list;
};

const backtrackUnique = (list, tempList, nums, start) => {
  // Add a copy of the current subset to the list of all subsets
  list.push([...tempList]);
  
  // Iterate through the numbers, starting from 'start' index
  // to ensure we're only adding numbers that haven't been considered
  // for the current subset
  for (let i = start; i < nums.length; i++) {
    // Add the current number to the subset
    tempList.push(nums[i]);
      
    // Recurse, increasing the start index to avoid reusing the same element
    backtrackUnique(list, tempList, nums, i + 1);
      
    // Remove the last added number to backtrack
    // This effectively explores the path without the current number,
    // allowing us to generate all possible subsets
    tempList.pop();
  }
};

module.exports = { subsetsUnique }; // Export the function using CommonJS module export

