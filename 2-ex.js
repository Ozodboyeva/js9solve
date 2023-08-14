const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

const wordCount = animals.reduce((count, animal) => {
  count[animal] = (count[animal] || 0) + 1;
  return count;
}, {});

console.log(wordCount);
