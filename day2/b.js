const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' });

const rounds = data.split('\n')

let elfScore = 0

const draw = 3
const win = 6

const letterToInt = (letter) => {
  if (letter === "A" || letter === 'X') {
    return 1
  }
  if (letter === "B" || letter === 'Y') {
    return 2
  }
  if (letter === "C" || letter === 'Z') {
    return 3
  }
}

const toPlay = (e, o) => {
  // loose
  if (e === 1) {
    if (o === 1) {
      return 3
    }
    if (o === 2) {
      return 1
    }
    if (o === 3) {
      return 2
    }
  }
  // draw
  if (e === 2) {
    return o
  }
  // win
  if (e === 3) {
    if (o === 1) {
      return 2
    }
    if (o === 2) {
      return 3
    }
    if (o === 3) {
      return 1
    }
  }

}

for (const round of rounds) {
  const [opponent, elf] = round.split(' ')
  const opponentKey = letterToInt(opponent)
  const stratKey = letterToInt(elf)
  let roundScore = 0
  const keyScore = toPlay(stratKey, opponentKey)
  if (stratKey === 1) {
    roundScore += keyScore
  }
  if (stratKey === 2) {
    roundScore += (keyScore + draw)
  }
  if (stratKey === 3) {
    roundScore += (keyScore + win)
  }
  elfScore += roundScore
  roundScore = 0
}

console.log('elf score total: ', elfScore);