
const pattern1 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []); // worked
  // let arr = [[], []];
  // let arr = new Array(2).fill(0).map(() => []);

  for (let row = 1; row <= n; row++) {
    arr.push([]);
    let rowPrint = '';

    for (let col = 1; col <= n; col++) {
      rowPrint += '* ';
      arr[row -1].push('*'); // because we initialize the array with 0, we need to subtract 1
      process.stdout.write('* ');
    }

    // console.log(rowPrint);
    //console.log('\n');
    process.stdout.write('\n');
  };

  console.log('arr', arr);
};


const pattern2 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []);

  for (let row = 1; row <= n; row++) {
    arr.push([]);
    let rowPrint = '';

    for (let col = 1; col <= row; col++) {
      rowPrint += '* ';
      arr[row -1].push('*');
      process.stdout.write('* ');
    }

    // console.log(rowPrint);
    //console.log('\n');
    process.stdout.write('\n');
  };

  console.log('arr', arr);
};


const pattern3 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []);

  for (let row = 1; row <= n; row++) {
    arr.push([]);
    let rowPrint = '';

    // for (let col = 1; col >= (n + 1 - row); col++) { // video
    for (let col = n; col >= row; col--) {
      rowPrint += '* ';
      arr[row -1].push('*');
      process.stdout.write('* ');
    }

    process.stdout.write('\n');
  };

  console.log('arr', arr);
};


const pattern4 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []);

  for (let row = 1; row <= n; row++) {
    arr.push([]);
    let rowPrint = '';

    for (let col = 1; col <= row; col++) {
      rowPrint += `${col} `;
      arr[row -1].push(`${col}`);
      process.stdout.write(`${col} `);
    }

    // console.log(rowPrint);
    //console.log('\n');
    process.stdout.write('\n');
  };

  console.log('arr', arr);
};

// ref: https://youtu.be/lsOOs5J8ycw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=1483
const pattern5 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []);

  let mid = Math.floor(n / 2);

  // for (let row = 1; row <= (n * 2) - 1; row++) {
  for (let row = 1; row < (n * 2); row++) {
    arr.push([]);
    let rowPrint = '';

    // for (let col = 1; col <= (Math.floor(n / 2) - (row - n - )); col++) {
    // for (let col = 1; col <= row * (row / 2); col++) {
    // for (let col = 1; col <= (n * 2) - row; col++) {
    // for (let col = 1; col <= n % row; col++) {
    for (let col = 1; col <= n - Math.abs(row - n); col++) {
      // if (row <= mid) {
        rowPrint += '* ';
        arr[row -1].push('*');
        process.stdout.write('* ');
      // } else {
        // rowPrint += '* ';
        // arr[row -1].push('*');
        // process.stdout.write('* ');
      // }
    }

    // console.log(rowPrint);
    //console.log('\n');
    process.stdout.write('\n');
  };

  console.log('arr', arr);
};


// ref: https://youtu.be/lsOOs5J8ycw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2100
const pattern28 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []);

  let mid = Math.floor(n / 2);


  // for (let row = 1; row <= (n * 2) - 1; row++) {
  for (let row = 1; row < (n * 2); row++) {
    arr.push([]);
    let rowPrint = '';


    let colsPrint = n - Math.abs(row - n);
    let colsSkip = n - colsPrint;
    // let colsSkip = (n / 2) - colsPrint;
  
    for (let col = 1; col <= n; col++) {
      if (colsSkip > 0) {
        rowPrint += ' ';
        arr[row -1].push(' ');
        process.stdout.write(' ');
      } else {
        if (colsPrint > 0) {
          rowPrint += '* ';
          arr[row - 1].push('*');
          process.stdout.write('* ');
          colsPrint--;
        }
      }

      colsSkip--;
    }

    // console.log(rowPrint);
    //console.log('\n');
    process.stdout.write('\n');

  };

  console.log('arr', arr);
};

// ref: https://youtu.be/lsOOs5J8ycw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2329
const pattern30 = (n) => {
  let arr = [];
  // let arr = new Array(n).fill(0).map(() => []);

  let mid = Math.floor(n / 2);


  // for (let row = 1; row <= (n * 2) - 1; row++) {
  for (let row = 1; row <= n; row++) {
    arr.push([]);
    let rowPrint = '';


    // let colsPrint = n - Math.abs(row - n);
    let colsPrint = (2 * row) - 1;
    let colsSkip = (n * 2) - colsPrint;
    // let colsSkip = (n / 2) - colsPrint;
  
    for (let col = 1; col <= (n * 2); col++) {
      // let numberPrint = n - (Math.abs(col - n) - 1);
      let numberPrint = n - (Math.abs(n - col) - 1);

      if (colsSkip > 0) {
        rowPrint += ' ';
        arr[row -1].push(' ');
        process.stdout.write(' ');
        colsSkip--;
      } else {
        //if (colsPrint > 0) {
          rowPrint += `${numberPrint} `;
          arr[row - 1].push(`${numberPrint}`);
          process.stdout.write(`${numberPrint} `);
          colsPrint--;
        //}
      }

    }

    // console.log(rowPrint);
    //console.log('\n');
    process.stdout.write('\n');

  };

  console.log('arr', arr);
};

// https://youtu.be/lsOOs5J8ycw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2477
// pattern17


// ref: https://youtu.be/lsOOs5J8ycw?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&t=2625
// 31

module.exports = { pattern1, pattern2, pattern3, pattern4, pattern5, pattern28, pattern30 };
