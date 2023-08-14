const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 4];

const newArray = array.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(newArray);
//[1, 2, 3, 4, 5, 6, 7, 8, 9]
