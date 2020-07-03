/* eslint-disable */
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
  for (let counter = 1; counter < Number(input[0]) + 1; counter += 1) {
    let output = '';
    for (let numOfStar = 0; numOfStar < counter; numOfStar += 1) {
      output += '*';
    }
    console.log(output);
  }
}
