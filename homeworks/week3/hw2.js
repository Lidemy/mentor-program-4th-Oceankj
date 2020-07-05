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
function solve(input) {
  const N = (input[0].split(' '))[0];
  const M = (input[0].split(' '))[1];
  for (let num = Number(N); num <= Number(M); num += 1) {
    const Num = `${num}`;
    let sum = 0;
    for (let counter = 0; counter < Num.length; counter += 1) {
      let result = 1;
      for (let order = 0; order < Num.length; order += 1) {
        result *= Number(Num[counter]);
      }
      sum += result;
    }

    if (sum === num) {
      console.log(num);
    }
  }
}
