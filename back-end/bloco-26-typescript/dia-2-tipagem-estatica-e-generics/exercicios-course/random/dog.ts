export class Dog {
  size: string;
  race: string;
  name: string;
  age: number;

  constructor(size: string, race: string, name: string, age: number) {
    this.size = size;
    this.race = race;
    this.name = name;
    this.age = age;
  }

  bark(): void {
    console.log('Au au au');
  }
}
