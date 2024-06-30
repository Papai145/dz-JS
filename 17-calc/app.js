const page = {
  information: document.querySelector(".result"),
  numbers: document.querySelectorAll(".number"),
};
function show(result) {
  page.information.innerText = `Результат = ${result.toFixed(2)}`;
  page.numbers[0].value = "";
  page.numbers[1].value = "";
}

function clickFun(e) {
  let number1 = Number(page.numbers[0].value);
  let number2 = Number(page.numbers[1].value);
  if (number1 && number2) {
    const but = e.target.name;
    let result = 0;
    if (but == 1) {
      result = number1 + number2;
    }
    if (but == 2) {
      result = number1 - number2;
    }
    if (but == 3) {
      result = number1 * number2;
    }
    if (but == 4) {
      result = number1 / number2;
    }
    show(result);
  } else {
    page.information.innerText = `Не корректные данные `;
  }
}
function clearResult() {
  page.information.innerText = "";
}
