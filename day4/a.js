const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

const supplies = data.split("\n");

let contains = 0;

const getRange = (num) => {
  const [str1, str2] = num.split("-");
  return [Number(str1), Number(str2)];
};

for (const supply of supplies) {
  const [elf1, elf2] = supply.split(",");
  const [elf1first, elf1last] = getRange(elf1);
  const [elf2first, elf2last] = getRange(elf2);

  if (
    (elf2last <= elf1last && elf1first <= elf2first) ||
    (elf1last <= elf2last && elf2first <= elf1first)
  ) {
    contains += 1;
  }
}

console.log("contains", contains);
