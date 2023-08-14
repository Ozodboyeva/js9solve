let numbers = [10, 5, 7, 15, 20, 45, 78];
let oddNumbers = numbers.filter((el) => el % 2);

console.log(oddNumbers);

let evenNumbers = numbers.filter((el) => !(el % 2));

console.log(evenNumbers);
