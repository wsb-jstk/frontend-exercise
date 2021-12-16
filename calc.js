const actualValueElem = document.querySelector("span.actual");
const resultValueElem = document.querySelector("span.result");

let value = "";
let operator = undefined;

function digitClicked() {
  resultValueElem.innerText += this.innerText;
}
function clear() {
  resultValueElem.innerText = "0";
  actualValueElem.innerHTML = "&nbsp;";
}

function applyOperator() {
  switch (operator) {
    case "/":
      break;
    case "-":
      break;
    case "+":
      break;
    case "%":
      break;
    default:
        throw new Exception();
  }
}
document.querySelector("td.clear").addEventListener("click", clear);

document.querySelectorAll("td.digit").forEach((element) => {
  element.addEventListener("click", digitClicked);
});

document.querySelectorAll("td.operator").forEach((element) => {
    element.addEventListener("click", applyOperator);
  });