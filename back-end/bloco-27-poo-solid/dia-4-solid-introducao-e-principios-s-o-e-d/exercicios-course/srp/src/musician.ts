import Drums from './drums';
import Flute from './flute';
import Guitar from './guitar';
import Instrument from './instrument-interface';

export default class Musician {
  constructor(
    public name: string,
    public instrument: Instrument = new Flute('Minha flauta'),
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`,
    );
  }
}

const musician1 = new Musician('Márcia');
const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician1.play();
musician2.play();
musician3.play();