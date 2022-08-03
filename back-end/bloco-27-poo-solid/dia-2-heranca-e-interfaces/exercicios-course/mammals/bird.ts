import { Animal } from "./animal";
export default class Bird extends Animal {
  fly() {
    console.log(`${this.name} está voando!`);
  }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Jun 07, 2017')),
);

console.log(parrot.age);
parrot.fly();
