const digitSum = (num) => {
  if (num < 10) {
    return num;
  }

  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return digitSum(sum);
};

console.log(digitSum(12345)); // Output: 6 (1 + 2 + 3 + 4 + 5 = 15, 1 + 5 = 6)
