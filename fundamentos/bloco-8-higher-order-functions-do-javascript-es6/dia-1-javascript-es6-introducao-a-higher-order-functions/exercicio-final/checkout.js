const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const criaEmail = (nome) => {
    const nomeArray = nome.split(' ');
    return {
        nome: nome,
        email: `${nomeArray[0].toLowerCase()}_${nomeArray[1].toLowerCase()}@trybe.com`,
    }
}

console.log(newEmployees(criaEmail));