const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getSpeciesResponsibleFor(employeeId) {
  const foundEmp = employees.find((element) => element.id === employeeId);
  const arrayOfSpecies = foundEmp.responsibleFor;
  const arrayObjectsSpecies = [];
  arrayOfSpecies.forEach((element1) => {
    arrayObjectsSpecies.push(species.find((element2) => element2.id === element1));
  });
  const arraySpeciesNames = arrayObjectsSpecies.map((element) => element.name);
  return arraySpeciesNames;
}

function getAreas(employeeId) {
  const foundEmp = employees.find((element) => element.id === employeeId);
  const arraySpecies = foundEmp.responsibleFor;
  const arrayObjectsSpecies = [];
  arraySpecies.forEach((element1) => {
    arrayObjectsSpecies.push(species.find((element2) => element2.id === element1));
  });
  const arrayAreas = arrayObjectsSpecies.map((element) => element.location);
  return arrayAreas;
}

function generateAllEmployessCoverage() {
  const returnedArray = [];
  employees.forEach((element) => {
    const employeeObject = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: getSpeciesResponsibleFor(element.id),
      locations: getAreas(element.id),
    };
    returnedArray.push(employeeObject);
  });
  return returnedArray;
}

function verifyParameter(parameter) {
  const isId = employees.some((element) => element.id === parameter.id);
  const isItFirstName = employees.some((element) => element.firstName === parameter.name);
  const isItLastName = employees.some((element) => element.lastName === parameter.name);
  if (isId) return 'itsId';
  if (isItFirstName || isItLastName) return 'itsName';
  return false;
}

function getEmployeesCoverage(object) {
  if (!object) return generateAllEmployessCoverage();
  const parameterType = verifyParameter(object);
  if (!parameterType) throw new Error('Informações inválidas');
  if (parameterType === 'itsId') {
    return generateAllEmployessCoverage().find((element) => element.id === object.id);
  } if (parameterType === 'itsName') {
    const employee = employees
      .find((element) => element.firstName === object.name || element.lastName === object.name);
    return generateAllEmployessCoverage().find((element) => element.id === employee.id);
  }
}

module.exports = getEmployeesCoverage;
