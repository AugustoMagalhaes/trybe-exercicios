"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SuperClass {
    constructor(isSuper) {
        this.sayHello = () => {
            console.log('Hello, world!');
        };
        this.isSuper = isSuper;
    }
}
exports.default = SuperClass;
