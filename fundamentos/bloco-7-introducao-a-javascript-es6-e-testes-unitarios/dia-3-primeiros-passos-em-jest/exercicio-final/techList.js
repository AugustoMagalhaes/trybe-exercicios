function techList(arrayTech, incumbentsName) {
    if (arrayTech.length === 0) {
      return 'Vazio!';
    }
    let sortedArray = arrayTech.sort(function (a, b) {
      return a.localeCompare(b); // fonte: https://graciano.me/2019/07/03/ordenacao-array-javascript-sort-funcao-funcional
    });
    let techListName = [];
    for (let i = 0; i < sortedArray.length; i += 1) {
      let ithElement = { tech: sortedArray[i], name: incumbentsName };
      techListName.push(ithElement);
    }
    return techListName;
  }

  module.exports = techList;