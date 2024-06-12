function crypto(password) {
  let arr = password.split("").reverse();
  let arr1 = arr.splice(4);
  let result = arr.reverse().concat(arr1).join("");
  return result;
}

console.log(crypto("password"));

function check(password) {
  let arr = password.split("");
  let arr1 = arr.splice(4);
  arr.reverse();
  let result = arr.concat(arr1).reverse().join("");
  return result;
}
console.log(check("wordssap"));
