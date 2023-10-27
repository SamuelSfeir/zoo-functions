const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const employee = data.employees.find((findEmployee) => {
    const { firstName, lastName } = findEmployee;
    return employeeName === firstName || employeeName === lastName;
  });

  return employee || {};
};
// console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
