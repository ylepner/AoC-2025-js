import fs from 'fs/promises';

const solve = async () => {
  let [ranges, numbers] = (await fs.readFile('./day-5/data.txt', 'utf8'))
    .trim()
    .split(/\n\s*\n/)
  ranges = ranges.trim().split('\r\n').map(el => el.split('-').map(Number))
  numbers = numbers.trim().split('\r\n').map(Number)

  let freshTest = new Set();

  for (let num of numbers) {
    if (ranges.some(([from, to]) => num >= from && num <= to)) {
      freshTest.add(num)
    }
  }
  console.log(freshTest.size)
}

solve()