/* eslint-enable *//* eslint-disable */
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

const Big = (a, b) => {
  for (let counter = 0; counter < a.length; counter += 1) {
    if (Number(a[counter]) > Number(b[counter])) {
      return 'A';
    } else if (Number(a[counter]) < Number(b[counter])) {
      return 'B';
    }
  }
  return 'DRAW';
};

const Small = (a, b) => {
  for (let counter = 0; counter < a.length; counter += 1) {
    if (Number(a[counter]) < Number(b[counter])) {
      return 'A';
    } else if (Number(a[counter]) > Number(b[counter])) {
      return 'B';
    }
  }
  return 'DRAW';
};
/* eslint-enable */
function solve(input) {
  const M = input[0];
  for (let i = 1; i <= M; i += 1) {
    const N = input[i].split(' ');
    const A = N[0];
    const B = N[1];
    const K = N[2];
    if (K > 0) {
      if (A.length > B.length) {
        console.log('A');
      } else if (A.length < B.length) {
        console.log('B');
      } else {
        console.log(Big(A, B));
      }
    } else if (K < 0) {
      if (A.length < B.length) {
        console.log('A');
      } else if (A.length > B.length) {
        console.log('B');
      } else {
        console.log(Small(A, B));
      }
    }
  }
}
