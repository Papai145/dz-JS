"use strict";
// первый вариант
function stringСonversion(obj) {
  let str = "";
  for (const key of Object.keys(obj)) {
    str += `${key}=${obj[key]}&`;
  }
  return str.slice(0, -1);
}
const obj = { search: "Вася", take: 10 };
console.log(stringСonversion(obj));

// второй вариант
function stringСonversion1(obj) {
  let str = "";
  for (const key of Object.keys(obj)) {
    Object.keys(obj).length - 1 == Object.keys(obj).indexOf(key)
      ? (str += `${key}=${obj[key]}`)
      : (str += `${key}=${obj[key]}&`);
  }
  return str;
}

const obj1 = { search: "Вася", take: 10 };
console.log(stringСonversion1(obj));
