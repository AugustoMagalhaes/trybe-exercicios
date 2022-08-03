"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        const timeDiff = Math.abs(Date.now() -
            new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
exports.Animal = Animal;
class Mammal extends Animal {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}
const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const main = (animal) => {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
