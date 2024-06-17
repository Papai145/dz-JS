let arr = [1, 40, -5, 10, 0];

function orderTemplate(firstNumber, secondNumber, desc) {
  if (!desc) {
    return firstNumber > secondNumber;
  }
  return firstNumber < secondNumber;
}

function sorting(arr, order = false) {
  let result = [...arr];
  for (j = 0; j < result.length; j++) {
    for (let i = j + 1; i < result.length; i++) {
      const isExchange = orderTemplate(result[j], result[i], order);
      if (isExchange) {
        // let temp = result[i];
        // result[i] = result[i + 1];
        // result[i + 1] = temp;
        [result[j], result[i]] = [result[i], result[j]];
      }
    }
  }

  return result;
}
console.log(sorting(arr));
