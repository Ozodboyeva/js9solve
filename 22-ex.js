const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

const calculateAverageAge = (pupils) => {
  const totalAge = pupils.reduce((sum, pupil) => sum + pupil.age, 0);
  const averageAge = totalAge / pupils.length;

  return averageAge;
};

const averageAge = calculateAverageAge(pupils);
console.log(averageAge);

const addProperties = (pupils) => {
  const newPupils = pupils.map((pupil) => {
    return {
      ...pupil,
      isPresent: true,
      grade: "A",
    };
  });

  return newPupils;
};

const newPupils = addProperties(pupils);
console.log(newPupils);
