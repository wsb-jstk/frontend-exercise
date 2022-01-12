import { isOperator, trimEquaction } from "./helper.js";
export class Calculator {
    #result;
    #equation;
  constructor() {
    this.#result = "";
    this.#equation = "";
  }

  appendNumber(num) {
    this.#result += num;
  }
  compute() {
    this.#equation = this.#result;
    this.#result = Math.round(eval(this.#equation) * 100) / 100;
  }
  clear() {
    this.#result = "";
    this.#equation = "";
  }
  applyOperator(operator) {
    const last = this.#result[this.#result.length - 1];
    if (!isOperator(last)) {
      this.#result += operator;
    }
  }
  getResult() {
    return { equation: this.#equation, result: this.#result };
  }
}
