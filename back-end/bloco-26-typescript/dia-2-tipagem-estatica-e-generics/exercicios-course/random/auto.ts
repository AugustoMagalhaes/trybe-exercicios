export interface IAuto {
  year: number;
  model: string;
  color: string;
  speedUp(): void;
}

export class Auto implements IAuto {
  year: number;
  model: string;
  color: string;

  constructor(year: number, model: string, color: string) {
    this.year = year;
    this.model = model;
    this.color = color;
  }
  speedUp(): void {
    console.log('Vrummmmm');
  }
}
