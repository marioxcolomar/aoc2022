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

const elfWins = (e, o) => {
  return (e === 1 && o === 3) || (e === 2 && o === 1) || (e === 3 && o === 2)
}

for (const round of rounds) {
  const [opponent, elf] = round.split(' ')
  const opponentKey = letterToInt(opponent)
  const elfKey = letterToInt(elf)
  const keyScore = elfKey
  let roundScore = 0
  const isWin = elfWins(elfKey, opponentKey)
  if (isWin) {
    roundScore += (keyScore + win)
  }
  const isDraw = opponentKey === elfKey
  if (isDraw) {
    roundScore += (keyScore + draw)
  }
  if (!isWin && !isDraw) {
    roundScore += keyScore
  }
  elfScore += roundScore
  roundScore = 0
}

console.log('elf score total: ', elfScore);