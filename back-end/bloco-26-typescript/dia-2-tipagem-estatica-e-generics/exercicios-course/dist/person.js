"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.EyeColor = void 0;
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor = exports.EyeColor || (exports.EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
exports.Person = Person;
