const getTruthyFalsy = (arr) => {
  const truthyArray = arr.filter((item) => item);
  const falsyArray = arr.filter((item) => !item);

  return {
    truthy: truthyArray,
    falsy: falsyArray,
  };
};

const myArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
const result = getTruthyFalsy(myArray);
console.log(result);
