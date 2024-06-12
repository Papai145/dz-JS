let arr = [1, 40, -5, 10, 0];
function sorting(arr, order = false) {
  let result = [...arr];
  for (j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
    }
  }
  if (order == true) {
    return result.reverse();
  }
  return result;
}
console.log(sorting(arr));
