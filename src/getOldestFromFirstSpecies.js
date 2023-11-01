const data = require('../data/zoo_data');

const { employees, species: animalSpecies } = data;

const getOldestFromFirstSpecies = (id) => {
  const employeeInfo = employees.find((emp) => emp.id === id);
  const firstSpeciesId = employeeInfo.responsibleFor[0];
  const speciesInfo = animalSpecies.find((specie) => specie.id === firstSpeciesId);
  const sortedAges = speciesInfo.residents
    .sort((a, b) => b.age - a.age);
  const oldestResident = sortedAges[0];
  return [oldestResident.name, oldestResident.sex, oldestResident.age];
};

module.exports = getOldestFromFirstSpecies;
