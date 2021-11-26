const candidatesStatus = 'aprovada';

switch (candidatesStatus) {
    case 'aprovada':
        console.log("A pessoa candidata foi aprovada no processo seletivo :)")
        break;
    case 'lista':
        console.log("A pessoa candidata está na lista de espera.");
        break;
    case 'reprovada':
        console.log("Infelizmente, a pessoa candidata não foi aprovada :(");
        break;
    default:
        console.log("Não se aplica.");
}

