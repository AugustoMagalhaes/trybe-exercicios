const replaceString = (str) => {
    let message = `Nós vamos substituir o parâmetro por 'x'`;
    if (typeof str === 'string') {
        return message.replace('x', str);
    }
}

console.log(replaceString('teste'));
console.log(`aqui costumava ser um \'x'`);

var mainSkills = ['bash', 'HTML', 'CSS', 'javascript', 'soft skills'];

const replaceAndAdd = (str) => {
    return `${replaceString(str)}. Minhas 5 melhores habilidades aprendidas na Trybe são: ${[...mainSkills]}.`
}

console.log(replaceAndAdd('#VQV'));