const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' });

const elfCalories = data.split('\n')

let maxValue = 0
let sum = 0
for (const elf of elfCalories) {
  if (elf.length <= 1) {
    maxValue = Math.max(maxValue, sum)
    sum = 0
  } else {
    sum += Number(elf)
  }
}

console.log('sum end', sum)
maxValue = Math.max(maxValue, sum)
console.log('maxValue', maxValue)
