
// ref: https://youtu.be/iKGAgWdgoRk?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=720
// O(n log n)
// better for linked list
  // because linked list is not continuous memory allocation
const mergeSortRecursive = (arr) => {
  // Base condition for exiting the function.
  if (arr.length === 1) {
    return arr;
  }

  // let mid = Math.ceil(arr.length / 2);
  let mid = arr.length / 2;
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid, arr.length);

  // // Debug.
  // console.log('arr1=', arr1);
  // console.log('arr2=', arr2);

  let arr1FromBottom = mergeSortRecursive(arr1);
  let arr2FromBottom = mergeSortRecursive(arr2);

  // Helper function.
  const mergeHelper = (arrMerge1, arrMerge2) => {
    let arrayMerged = [];
    let counterArrMerge1 = 0;
    let counterArrMerge2 = 0;
    // let counterArrMerged = 0;

    // // Debug.
    // console.log('arrMerge1=', arrMerge1);
    // console.log('arrMerge1.length=', arrMerge1.length);
    // console.log('arrMerge2=', arrMerge2);
    // console.log('arrMerge2.length=', arrMerge2.length);

    while (counterArrMerge1 < arrMerge1.length && counterArrMerge2 < arrMerge2.length) {
      if (arrMerge1[counterArrMerge1] < arrMerge2[counterArrMerge2]) {
        arrayMerged.push(arrMerge1[counterArrMerge1]);
        counterArrMerge1++;
      } else {
        arrayMerged.push(arrMerge2[counterArrMerge2]);
        counterArrMerge2++;
      }
    }

    // Remainder
    while (counterArrMerge1 < arrMerge1.length) {
      arrayMerged.push(arrMerge1[counterArrMerge1]);
      counterArrMerge1++;
      //counterArrMerge2++;
    }

    while (counterArrMerge2 < arrMerge2.length) {
      arrayMerged.push(arrMerge2[counterArrMerge2]);
      //counterArrMerge1++;
      counterArrMerge2++;
    }

    return arrayMerged;
  }


  return mergeHelper(arr1FromBottom, arr2FromBottom);



  // // My attempt
  // // exit condition
  // if (arr.length === 1) {
  //   return arr;
  // }

  // let arr1 = [];
  // let arr2 = [];
  // let arrMerged = [];

  // // Split the array.
  // let mid = Math.ceil(arr.length / 2);


  // // Debug.
  // console.log('arr=', arr);

  // for (let i = arr.length - 1; i >= 0; i--) {
  // // for (let i = mid; i >= 0; i--) {

  //   // In-place sorting (selection sort)
  //   // Array 1
  //   if (i < mid) {
  //     console.log('i(array1)=', i);
  //     console.log('arr[i]=', arr[i]);

  //     if (arr[i] > arr[mid]) {
  //       let temp1 = arr[i];
  //       arr[arr[i]] = arr[mid];
  //       arr[mid] = temp1;
  //     }

  //     arr1.push(arr[i]);
  //   }

  //   // Array 2
  //   if (i >= mid) {
  //     console.log('i(array2)=', i);
  //     console.log('arr[i]=', arr[i]);

  //     // if (arr[i - 1] > arr[i]) {
  //     //   let temp2 = arr[i - 1];
  //     //   arr[i - 1] = arr[i];
  //     //   arr[i] = temp2;
  //     // }

  //     if (arr[i] < arr[i - 1]) {
  //       let temp2 = arr[i - 1];
  //       arr[i - 1] = arr[i];
  //       arr[i] = temp2;
  //     }
      
  //     arr2.push(arr[i]);
  //   }


  //   // Debug.
  //   // console.log('arr[i]=', arr[i]);

  // }

    
  // // if (arr[0] > arr[1]) {
  // //   arrMerged.push(arr[1]);
  // //   arrMerged.push(arr[0]);
  // //   return mergeSortRecursive(arrMerged);
  // // } 

  // // arrMerged.push(arr[0]);
  // // arrMerged.push(arr[1]);
  // // return mergeSortRecursive(arrMerged);


  // // Debug.
  // console.log('arr1=', arr1);
  // console.log('arr2=', arr2);

  // // return arrMerged;

};

// ref: https://youtu.be/iKGAgWdgoRk?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod&t=2601
const mergeSortRecursiveInPlace = (arr, start, end) => {
}


module.exports = { mergeSortRecursive };