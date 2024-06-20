function filter(arr, fun) {
  let result = [];
  for (let index in arr) {
    if (!fun(arr[index])) {
      result.push(arr[index]);
    }
  }
  return result;
}

function check(num) {
  return Number(num) >= 5 ? true : false;
}

let arr = [3, 6, 9, 2];
console.log(filter(arr, check));
