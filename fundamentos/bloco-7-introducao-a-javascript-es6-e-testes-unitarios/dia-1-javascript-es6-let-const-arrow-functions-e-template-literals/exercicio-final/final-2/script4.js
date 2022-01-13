const replaceString = (str) => {
    let message = `Nós vamos substituir o parâmetro por 'x'`;
    if (typeof str === 'string') {
        return message.replace('x', str);
    }
}

console.log(replaceString('teste'));
console.log(`aqui costumava ser um \'x'`);

