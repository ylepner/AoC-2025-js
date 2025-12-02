import fs from 'fs/promises';

const solve = async () => {
  const data = (await fs.readFile('./day-1/data.txt', { encoding: 'utf8' })).trim().split('\r\n');
  let start = 50;
  let result = 0;
  for (let rotation of data) {
    const direction = rotation[0];
    let number = Number(rotation.slice(1));
    if (direction === 'L') {
      start = (start - number + 100) % 100;
    } else {
      start = (start + number) % 100;
    }
    if (start === 0) result += 1;
  }
  return result;
}

console.log(await solve())
