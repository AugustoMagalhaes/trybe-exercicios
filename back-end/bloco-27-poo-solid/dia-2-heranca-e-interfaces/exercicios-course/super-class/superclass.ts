export default class SuperClass {
  public isSuper: boolean;

  constructor(isSuper: boolean) {
    this.isSuper = isSuper;
  }

  public sayHello = (): void => {
    console.log('Hello, world!');
  }

}