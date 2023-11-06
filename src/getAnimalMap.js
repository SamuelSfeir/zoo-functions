const data = require('../data/zoo_data');

const { species } = data;

// PT-BR: Função que recebe uma região como parâmetro e retorna um array com as espécies dessa região
// EN: Function that takes a region as a parameter and returns an array with the species in that region
const getSpeciesFromLocation = (location) => {
  const arrayWithAnimalsName = [];
  const animals = species.filter((element) => element.location === location);
  animals.forEach((element) => {
    arrayWithAnimalsName.push(element.name);
  });
  return arrayWithAnimalsName;
};

// PT-BR: Função que verifica se o parâmetro da função principal é 'includeNames: true'
// EN: Function that checks if the main function parameter is 'includeNames: true'
const verifyIncludeNames = (parameter) => {
  const arrayKeys = Object.keys(parameter);
  const arrayWithNames = [];
  arrayKeys.forEach((element) => {
    if (element === 'includeNames') {
      arrayWithNames.push(element);
    }
  });
  return arrayWithNames.length !== 0;
};

const getAnimalMap = (options) => {
  // seu código aqui
};

module.exports = getAnimalMap;
