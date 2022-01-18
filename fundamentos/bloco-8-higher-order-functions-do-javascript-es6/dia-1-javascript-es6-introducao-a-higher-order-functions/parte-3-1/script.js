const wakeUp = () => {
    console.log('Acordando!!');
}

const letsGetCoffee = () => {
    console.log('Bora tomar café!!');
}

const cmonSleep = () => {
    console.log('Partiu dormir!!');
}

const doingThings = (callback) => {
    return callback();
}

doingThings(wakeUp);
doingThings(letsGetCoffee);
doingThings(cmonSleep);