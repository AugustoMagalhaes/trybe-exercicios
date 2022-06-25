const fs = require('fs').promises;

fs.writeFile('./meu-arquivo-wx.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });