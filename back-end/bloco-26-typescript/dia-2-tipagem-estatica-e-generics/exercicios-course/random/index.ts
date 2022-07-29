import { Auto } from './auto';
import { Dog } from './dog';
import { EyeColor, Person } from './person';

const person1 = new Person('Jane Doe', new Date('1986-01-01'), EyeColor.Brown);
const person2 = new Person('Jon Doe', new Date('1980-08-05'), EyeColor.Black);

console.log(person1);
person1.speak();

console.log(person2);
person2.walk();

const toto = new Dog('medium', 'mutt', 'toto', 9);
toto.bark();

const golzin = new Auto(2000, 'Gol Bola', 'Branco');
golzin.speedUp();
