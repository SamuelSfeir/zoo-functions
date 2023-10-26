const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const searchName = data.species.find((name) => name.name === animal);
  const searchAge = searchName.residents.find((ageofAnimal) => ageofAnimal.age === age);
  if (searchAge) { // Doesn't exist
    return false;
  }
  return true; // exists
};

module.exports = getAnimalsOlderThan;
