const freeSpace = (str) => {
  const splitArray = str.split(" ");
  const boshplace = splitArray.some((item) => item === "");

  return boshplace;
};

const inputString = "Men Abdulaziz Programmerman";
const result = freeSpace(inputString);
console.log(result); //false
