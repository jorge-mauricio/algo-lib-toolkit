
// More space efficiency as compared to merge sort, as it does in place sorting.
// pivot element
// all element greater to the right
// all elements lower to the left
// ref solution: https://youtu.be/Z8svOqamag8?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=1929
const quickSortRecursive = (arr) => {
  
  // didn't work
  // watch the video and remake the function or chatgpt
  
  // Check if only two items
  // Not sure if it stays in this position
  if (arr.length === 2) {
    if (arr[0] < arr[1]) {
      return ans;
    }
  }
  
  let start = 0;
  let end = arr.length - 1;

  let startLast = 0;
  let endLast = arr.length - 1;
  let globalCounter = 0;
  
  let pivotIndex = arr.length - 2;
  let pivotValue = arr[pivotIndex];



  while (start <= end) {
    // while (start < pivotIndex) {
    startLast = start;
    endLast = end;

    while (arr[start] < pivotValue) {
      start++;
    } 
    while (arr[end] > pivotValue) {
      end--;
    } 

    if (start <= end) {
      if (arr[start] > arr[pivotIndex]) {
        let tempStartSwap = arr[start];
        arr[start] = pivotValue;
        arr[pivotIndex] = tempStartSwap;

        //start++;

        start++;
        end--;
      }
    
      if (arr[end] < arr[pivotIndex]) {
        let tempStartEnd = arr[end];
        arr[end] = pivotValue;
        arr[pivotIndex] = tempStartEnd;

        //end--;

        start++;
        end--;
      } else {
        // start++;
        // end--;
      }
    }


    // if (startLast === start && endLast === end) {
    //   break;
    // }

    // if (globalCounter > (arr.length * arr.length)) {
    //   break;
    // }
    
    // start++;
    globalCounter++;

    // Debug.
    // console.log('start=', start);
    // console.log('end=', end);

  }

  return arr;







  // let ans = [];

  // // Check if only two items
  // // Not sure if it stays in this position
  // if (arr.length === 2) {
  //   if (arr[0] < arr[1]) {
  //     return ans;
  //   }
  // }

  // let pivotIndex = arr.length - 2;

  // let arr1 = [];
  // let arr2 = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[pivotIndex] < arr[i]) {
  //     arr2.push(arr[i]);
  //   } else {
  //     arr1.push(arr[i]);
  //   }




  //   // Debug.
  //   console.log('arr[i]=', arr[i]);
  //   console.log('arr[pivotIndex]=', arr[pivotIndex]);

  // }

  // // Debug.
  // console.log('arr1=', arr1);
  // console.log('arr2=', arr2);

  // return ans;
};

module.exports = { quickSortRecursive };