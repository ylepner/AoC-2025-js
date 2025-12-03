import fs from 'fs/promises';

const solve = async () => {
  const data = (await fs.readFile('./day-3/data.txt', 'utf8'))
    .trim()
    .split('\r\n');

  let total = 0;

  for (let line of data) {
    let bestPair = 0;

    for (let i = 0; i < line.length - 1; i++) {
      const first = Number(line[i]);

      let maxRight = 0;
      for (let j = i + 1; j < line.length; j++) {
        const digit = Number(line[j]);
        if (digit > maxRight) maxRight = digit;
      }

      const pair = first * 10 + maxRight;

      if (pair > bestPair) bestPair = pair;
    }

    total += bestPair;
  }

  return total;
};

console.log(await solve())