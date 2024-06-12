const hasLicense = true;
let age = 18;
let isDrunk = false;

let result = age >= 18 && !isDrunk && hasLicense;
console.log(`Этот водитель ${result ? "может" : "не может"} водить`);
