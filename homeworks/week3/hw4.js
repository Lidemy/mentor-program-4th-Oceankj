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
  const totalOfWord = input[0].length - 1;
  const Input = lines[0];
  for (let counter = 0; counter !== (totalOfWord - counter); counter += 1) {
    if ((totalOfWord - counter) === 1) {
      break;
    } else if (Input[counter] !== Input[totalOfWord - counter]) {
      console.log('False');
      return;
    }
  }
  console.log('True');
}
