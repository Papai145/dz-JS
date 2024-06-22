function filter(arr, fun) {
  let result = [];
  for (let item of arr) {
    if (!fun(item)) {
      result.push(item);
    }
  }
  return result;
}

function check(num) {
  return Number(num) >= 5 ? true : false;
}

let arr = [3, 6, 9, 2];
console.log(filter(arr, check));
