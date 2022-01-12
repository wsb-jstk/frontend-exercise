import { Calculator } from "./calculator";

const actualValueElem = document.querySelector("span.actual") as HTMLElement;
const resultValueElem = document.querySelector("span.result") as HTMLElement;

const calculator = new Calculator();

const render = function (result) {
  actualValueElem.innerHTML = result.equation
    ? `${result.equation}=`
    : "&nbsp;";
  resultValueElem.innerText = result.result || "0";
};

document.querySelector("td.clear").addEventListener("click", function () {
  calculator.clear();
  render(calculator.getResult());
});

document.querySelectorAll("td.digit").forEach((element) => {
  element.addEventListener("click", function () {
    calculator.appendNumber(this.innerText);
    render(calculator.getResult());
  });
});

document.querySelectorAll("td.operator").forEach((element) => {
  element.addEventListener("click", function () {
    calculator.applyOperator(this.innerText);
    render(calculator.getResult());
  });
});

document.querySelectorAll("td.result-operator").forEach((element) => {
  element.addEventListener("click", () => {
    calculator.compute();
    render(calculator.getResult());
  });
});
document.querySelector("body").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
