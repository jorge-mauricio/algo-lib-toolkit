
// ref: https://youtu.be/ymgnIIclCF0?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=1766
// maxValueIndex
const selectionSortRecursive = (arr, row, col, maxValueIndex) => {
  if (row === 0) {
    return arr;
  }

  // let maxValueIndex = maxValueIndex;
  // console.log('arr[row]=', arr[row], 'arr[col]=', arr[col]);
  // console.log('maxValueIndex=', maxValueIndex);


  if (col < row) {
    if (arr[col] > arr[maxValueIndex]) {
      return selectionSortRecursive(arr, row, col + 1, col);
    } else {
      return selectionSortRecursive(arr, row, col + 1, maxValueIndex);
    }
  } else {
    let temp = arr[maxValueIndex];
    arr[maxValueIndex] = arr[col - 1];
    arr[col - 1] = temp;
    return selectionSortRecursive(arr, row - 1, 0, 0);
  }



  // attempt - didn't work
  // if (arr[col] > maxValue) {
  //   maxValue = arr[col];
  //   console.log('maxValue=', maxValue);
  //   let temp = arr[row];
  //   arr[row] = arr[col];
  //   arr[col] = temp;
    
  //   return selectionSortRecursive(arr, row, col + 1, maxValue);
  // } 
  // return selectionSortRecursive(arr, row - 1, col, maxValue);


  // for (let i = 0; i < arr.length; i++) {
  //   console.log('arr[i]=', arr[i]);

  //   maxValueIndex = Math.max(maxValueIndex, arr[i]);

  //   if (arr[maxValueIndex])



  // }
  // console.log('maxValueIndex=', maxValueIndex);

};

module.exports = { selectionSortRecursive };