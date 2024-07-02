const page = {
  information: document.querySelector(".result"),
  numbers: document.querySelectorAll(".number"),
};
function show(result) {
  page.information.innerText = `Результат = ${
    isNaN(result) ? result : result.toFixed(2)
  }`;
  [...page.numbers].map((x) => (x.value = ""));
}
const action = {
  1: (a, b) => a + b,
  2: (a, b) => a - b,
  3: (a, b) => a * b,
  4: (a, b) => (b === 0 ? "нельзя делить на 0" : a / b),
};
function clickFun(e) {
  const [num1, num2] = [...page.numbers].map(({ value }) => Number(value));
  if (isNaN(num1) || isNaN(num2)) {
    page.information.innerText = "Не корректные данные";
    return;
  }

  let result = action[e.target.name](num1, num2);
  show(result);
}
function clearResult() {
  page.information.innerText = "";
}
