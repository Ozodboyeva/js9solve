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
const addProperties = (pupils) => {
  const newPupils = pupils.map((pupil) => {
    const isPassed = pupil.grade >= 70 ? true : false;

    return {
      ...pupil,
      isPresent: true,
      grade: "A",
      isPassed: isPassed,
    };
  });

  return newPupils;
};
const newPupils = addProperties(pupils);
console.log(newPupils);
