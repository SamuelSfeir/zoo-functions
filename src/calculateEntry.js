const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const counts = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      counts.child += 1;
    } else if (entrant.age < 50) {
      counts.adult += 1;
    } else {
      counts.senior += 1;
    }
  });

  return counts;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const { child, adult, senior } = data.prices;
  const inputEntrants = Object.values(countEntrants(entrants));
  let somaEntrants = 0;
  somaEntrants += inputEntrants[0] * child;
  somaEntrants += inputEntrants[1] * adult;
  somaEntrants += inputEntrants[2] * senior;
  return somaEntrants;
};

module.exports = { calculateEntry, countEntrants };
