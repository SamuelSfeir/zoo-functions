const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  } {
    const speciesFound = data.species.filter((species) => ids.includes(species.id));
    return speciesFound;
  }
};
console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));

module.exports = getSpeciesByIds;
