const data = require('../data/zoo_data');

const isManager = (id) => {
  const isManager1 = data.employees.some((employee) => employee.managers.includes(id));
  return isManager1;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const { employees } = data;

  const findManagedEmployees = (person) => person.managers.includes(managerId);
  const formatFullName = (person) => `${person.firstName} ${person.lastName}`;

  const relatedEmployees = employees
    .filter(findManagedEmployees)
    .map(formatFullName);

  return relatedEmployees;
};

module.exports = { isManager, getRelatedEmployees };
