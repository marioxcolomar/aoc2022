const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' });

const elfCalories = data.split('\n')

let calories = []
let sum = 0
for (const elf of elfCalories) {
  if (elf.length <= 1) {
    calories.push(sum)
    sum = 0
  } else {
    sum += Number(elf)
  }
}

console.log('calories', calories);
const top3 = calories.sort((a, b) => b - a).slice(0, 3)
console.log("🚀 ~ file: b.js ~ line 17 ~ top3", top3)
const totalTop3 = top3.reduce((acc, curr) => acc + curr, 0)
console.log("🚀 ~ file: b.js ~ line 19 ~ totalTop3", totalTop3)
