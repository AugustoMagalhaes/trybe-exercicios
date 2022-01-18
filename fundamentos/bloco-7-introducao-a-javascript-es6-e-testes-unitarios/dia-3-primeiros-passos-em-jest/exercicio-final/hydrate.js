function hydrate(amountOfDrinks) {
    let splitedAmountOfDrinks = amountOfDrinks.split(' ');
    let numberOfHydrates = 0;
    for (let i = 0; i < splitedAmountOfDrinks.length; i += 1) {
      if (isNaN(splitedAmountOfDrinks[i]) === false) {
        numberOfHydrates += parseInt(splitedAmountOfDrinks[i], 10);
      }
    }
    return numberOfHydrates === 1
      ? `${numberOfHydrates} copo de água`
      : `${numberOfHydrates} copos de água`;
  }

  module.exports = hydrate;