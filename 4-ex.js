const numbers = [1, -4, 12, 0, -3, 29, -150];

const sum = numbers
  .filter((number) => number > 0)
  .reduce((acc, number) => acc + number, 0);

console.log(sum);
