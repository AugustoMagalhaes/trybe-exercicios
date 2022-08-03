"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Bird extends animal_1.Animal {
    fly() {
        console.log(`${this.name} está voando!`);
    }
}
exports.default = Bird;
const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
