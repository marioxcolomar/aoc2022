const priority = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

const rucksacks = data.split("\n");
console.log("rucksacks", rucksacks.length);

const groups = [];
let curr = [];
for (const rucksack of rucksacks) {
  if (rucksack.length > 0) {
    curr.push(rucksack);
  }
  if (curr.length === 3) {
    groups.push(curr);
    curr = [];
  }
}

let score = 0;
for (const elfs of groups) {
  const [one, two, three] = elfs;
  let repeat = [];
  for (const char of two) {
    if (one.includes(char)) {
      repeat.push(char);
    }
  }
  let value;
  for (const peat of repeat) {
    if (three.includes(peat)) {
      value = peat;
    }
  }
  if (value) {
    score += priority[value];
  }
}

console.log("score", score);
