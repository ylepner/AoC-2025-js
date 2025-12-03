import fs from 'fs/promises';

const isDoubleRepeat = (number) => {
  const str = String(number);
  if (str[0] === '0') return false;
  if (str.length % 2 !== 0) return false;

  let half = str.length / 2;
  return str.slice(0, half) === str.slice(half);
}

let result = 0;

const solve = async () => {
  const pairs = (await fs.readFile('./day-2/data.txt', { encoding: 'utf8' })).trim().split(',').map(el => el.split("-").map(Number))

  for (let [a, b] of pairs) {
    for (let num = a; num <= b; num++) {
      if (isDoubleRepeat(num)) result += num;
    }
  }
  return result;
}
console.log(await solve())