const string = "George Raymond Richard Martin";

const firstLetters = string
  .split(" ")
  .map((word) => word[0])
  .join("");

console.log(firstLetters);
