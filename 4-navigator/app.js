const adressLat = 15; //x
const adressLong = 5;
const positionLat = 35; //x
const positionlong = 40;

let distance = Math.sqrt(
  (adressLat - positionLat) ** 2 + (adressLong - positionlong) ** 2
);
console.log(distance);
