import { CalculationResult } from "./calculation-result";
import { isOperator, trimEquaction } from "./helper";
export class Calculator {
  #result: string;
  #equation: string;
  constructor() {
    this.#result = "";
    this.#equation = "";
  }

  appendNumber(num: string): void {
    this.#result += num;
  }
  compute(): void {
    this.#equation = this.#result;
    this.#result = Math.round(eval(this.#equation) * 100) / 100 + '';
  }
  clear(): void {
    this.#result = "";
    this.#equation = "";
  }
  applyOperator(operator: string): void {
    const last = this.#result[this.#result.length - 1];
    if (!isOperator(last)) {
      this.#result += operator;
    }
  }
  getResult(): CalculationResult {
    return { equation: this.#equation, result: this.#result };
  }
}
