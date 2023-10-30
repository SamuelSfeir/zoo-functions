const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;

  if (!animal) {
    const animalCount = species.reduce((acc, specie) => ({
      ...acc,
      [specie.name]: specie.residents.length,
    }), {});
    return animalCount;
  }

  const matchingSpecies = species.find((specie) => specie.name === animal.species);

  if (!animal.sex) {
    return matchingSpecies.residents.length;
  }

  const matchingSexCount = matchingSpecies.residents.filter((resident) =>
    resident.sex === animal.sex).length;
  return matchingSexCount;
};

module.exports = countAnimals;
