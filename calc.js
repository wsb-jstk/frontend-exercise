import { isOperator, trimEquaction } from "./helper.js";

const actualValueElem = document.querySelector("span.actual");
const resultValueElem = document.querySelector("span.result");

function digitClicked() {
  if (resultValueElem.innerText === "0") {
    resultValueElem.innerText = this.innerText;
  } else {
    resultValueElem.innerText += this.innerText;
  }
}

function clear() {
  resultValueElem.innerText = "0";
  actualValueElem.innerHTML = "&nbsp;";
}

function applyOperator() {
  const last = resultValueElem.innerText[resultValueElem.innerText.length - 1];
  if (!isOperator(last)) {
    resultValueElem.innerText += this.innerText;
  }
}

function prepareResult() {
  const equation = trimEquaction(resultValueElem.innerText);
  actualValueElem.innerText = equation + "=";
  resultValueElem.innerText = Math.round(eval(equation) * 100) / 100;
}

document.querySelector("td.clear").addEventListener("click", clear);

document.querySelectorAll("td.digit").forEach((element) => {
  element.addEventListener("click", digitClicked);
});

document.querySelectorAll("td.operator").forEach((element) => {
  element.addEventListener("click", applyOperator);
});

document.querySelectorAll("td.result-operator").forEach((element) => {
  element.addEventListener("click", prepareResult);
});
document.querySelector("body").addEventListener("contextmenu", e => {
  e.preventDefault();
});