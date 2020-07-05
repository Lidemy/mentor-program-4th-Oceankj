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
/* eslint-enable */
const Prime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

function solve(input) {
  const Num = Number(input[0]);
  for (let counter = 1; counter < Num + 1; counter += 1) {
    if (Number(input[counter]) === 1) {
      console.log('Composite');
    } else if (Prime(Number(input[counter]))) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}
