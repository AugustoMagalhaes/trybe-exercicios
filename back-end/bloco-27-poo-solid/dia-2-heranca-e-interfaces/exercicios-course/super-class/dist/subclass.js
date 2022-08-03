"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const superclass_1 = __importDefault(require("./superclass"));
class SubClass extends superclass_1.default {
    constructor(isSuper) {
        super(isSuper);
        super.isSuper = isSuper;
    }
}
exports.default = SubClass;
const myFunc = (superclass) => {
    superclass.sayHello();
};
const firstClass = new SubClass(false);
const secClass = new superclass_1.default(true);
myFunc(firstClass);
myFunc(secClass);
