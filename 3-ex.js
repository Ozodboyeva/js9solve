let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map((el, i, arr) => {
  return el * 2;
});
console.log(doubleNumbers);
