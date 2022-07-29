"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(size, race, name, age) {
        this.size = size;
        this.race = race;
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('Au au au');
    }
}
exports.Dog = Dog;
