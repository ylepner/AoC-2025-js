import fs from 'fs/promises';

const DIRECTIONS = [
  [-1, -1], [-1, 0], [-1, +1], [0, -1], [0, +1], [+1, -1], [+1, 0], [+1, +1]
]

const solve = async () => {
  const lines = (await fs.readFile('./day-4/data.txt', 'utf8'))
    .trim()
    .split('\r\n')

  const isValid = (x, y) => x >= 0 && y >= 0 && x < lines.length && y < lines[0].length && lines[x][y] === '@';

  const rows = lines.length;
  const cols = lines[0].length;

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (lines[i][j] !== '@') continue;

      let amount = 0;

      for (let [dx, dy] of DIRECTIONS) {
        if (isValid(i + dx, j + dy)) amount += 1
        if (amount === 4) break;
      }

      if (amount < 4) count++
    }
  }
  console.log(count);
}

solve()

