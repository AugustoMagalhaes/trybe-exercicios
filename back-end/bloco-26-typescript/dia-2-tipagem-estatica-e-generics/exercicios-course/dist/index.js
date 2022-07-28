"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const person1 = new person_1.Person('Jane Doe', new Date('1986-01-01'), person_1.EyeColor.Brown);
const person2 = new person_1.Person('Jon Doe', new Date('1980-08-05'), person_1.EyeColor.Black);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
