// let qariyalar = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// qariyalar.sort((a, b) => a.age - b.age);
// qariyalar.sort((a, b) => b.age - a.age);

// console.log(qariyalar);
const people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

const sortedPeople = people.sort((a, b) => a.age - b.age);

const youngest = sortedPeople[0];
const oldest = sortedPeople[sortedPeople.length - 1];

const ageDifference = oldest.age - youngest.age;

console.log(ageDifference);
//54
