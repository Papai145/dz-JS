function crypto(password) {
  let conversionToArray = password.split("");
  let secondPartArr = conversionToArray.splice(4).reverse();
  let firstPartArr = conversionToArray.reverse();
  let result = firstPartArr.concat(secondPartArr).join("");
  return result;
}

function checkPassword(encryptedPassword, originalPassword) {
  if (!encryptedPassword || !originalPassword) {
    return false;
  }
  return originalPassword === crypto(encryptedPassword);
}
const pwd = "password";
const encrypt = crypto(pwd); // ssapdorw
console.log(encrypt);
const decrypt = crypto(encrypt); // password
console.log(decrypt);
