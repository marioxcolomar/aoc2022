const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" }).split("\n");
const separator = data.indexOf("");
const stacksStrings = data.slice(0, separator);
const stacks = {};
const indexes = [];
const stackRow = stacksStrings[stacksStrings.length - 1];
for (let i = 0; i < stackRow.length; i += 1) {
  const value = stackRow[i].replace(" ", "");
  if (Number(value) > 0) {
    indexes.push(i);
    stacks[value] = [];
  }
}

const input = stacksStrings.slice(0, stacksStrings.length - 1);
for (const string of input) {
  for (const index of indexes) {
    const column = indexes.indexOf(index) + 1;
    const value = string[index];
    if (value !== " ") {
      stacks[column] = stacks[column].concat(value);
    }
  }
}

const instruc = data.slice(separator + 1, data.length);

for (const inst of instruc) {
  const [, count, , from, , to] = inst.split(" ");
  const fromData = stacks[from];
  const toData = stacks[to];
  const move = fromData.splice(0, count);
  if (move.length === 1) {
    stacks[to] = move.reverse().concat(toData);
  }
  stacks[to] = move.concat(toData);
}

// console.log("stacks", stacks);

const res = Object.values(stacks).reduce(
  (acc, curr) => acc.concat(curr[0]),
  ""
);

console.log("res", res);
