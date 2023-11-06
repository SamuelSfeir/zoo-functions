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

// PT-BR: Função que cria a localização de todas as espécies
// EN: Function that creates the location of all species
const createGeneralLocation = () => ({
  NE: getSpeciesFromLocation('NE'),
  NW: getSpeciesFromLocation('NW'),
  SE: getSpeciesFromLocation('SE'),
  SW: getSpeciesFromLocation('SW'),
});

// PT-BR: Função que retorna os animais por área, porém com a possibilidade de ser em ordem alfabética
// EN: Function that returns animals by area, but with the possibility of being in alphabetical order
const getAnimalAlphabetical = (location, sort) => {
  let object = {};
  let animalArray = [];
  const arrayResult = [];
  const animals = species.filter((element) => element.location === location);
  animals.forEach((element) => {
    element.residents.forEach((element2nd) => {
      animalArray.push(element2nd.name);
    });
    if (sort) animalArray.sort();
    object[element.name] = animalArray;
    arrayResult.push({ ...object });
    animalArray = [];
    object = {};
  });
  return arrayResult;
};

// PT-BR: Função que retorna o nome das espécies levando em conta o sexo e a região
// EN: Function that returns the name of the species considering sex and region
const getAnimalBySexAndRegion = (location, sex, sort) => {
  const arrayResult = [];
  const animals = species.filter((element) => element.location === location);
  animals.forEach((element) => {
    const animalArray = [];
    element.residents.forEach((element2nd) => {
      if (element2nd.sex === sex) animalArray.push(element2nd.name);
    });
    if (sort) animalArray.sort();
    const object = { [element.name]: [...animalArray] };
    arrayResult.push(object);
  });
  return arrayResult;
};

// Função que retorna se o sexo do animal é especificado
// Function that returns if the animal's sex is especified
const getAnimalIfSexIsSpecified = (location, sex, sort) => {
  if (!sex) return getAnimalAlphabetical(location, sort);
  return getAnimalBySexAndRegion(location, sex, sort);
};

// Função que retorna a localização dos animais, levando em conta o sexo e a ordenação alfabética
// Function that retorn the localization of the animals, considering its sex and alphabetical order











const getAnimalMap = (options) => {
  // seu código aqui
};

module.exports = getAnimalMap;
