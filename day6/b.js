const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

let marker = "";

let count = 0;
for (const char of data) {
  if (marker.length > 13) {
    const markerSet = new Set(marker);
    if (markerSet.size === 14) {
      break;
    }
    marker = marker.concat(char);
    marker = marker.slice(1);
  } else {
    marker = marker.concat(char);
  }
  count += 1;
}

console.log(`marker: ${marker} count: ${count}`);
