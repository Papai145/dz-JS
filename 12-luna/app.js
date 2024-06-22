const card = "234s834503458353";
const card1 = "2342834503458353";
const card2 = "4561-2612-1234-5464";
const card3 = "4561-2612-1534-5464";

function checkCard(number) {
  if (number % 10 == 0) {
    return true;
  }
  return false;
}
function luna(card) {
  card = card.replaceAll("-", "").split("");
  let count = 0;
  if (card.length == 16) {
    for (let i = 1; i < card.length + 1; i++) {
      if (i % 2 !== 0) {
        let doubledNumber = card[i - 1] * 2;
        if (doubledNumber > 9) {
          count += doubledNumber - 9;
          continue;
        }
        //здесь
        count += Number(doubledNumber);
        continue;
      }
      //здесь
      count += Number(card[i - 1]);
    }
  }
  return checkCard(count);
}
console.log(luna(card));
console.log(luna(card1));
console.log(luna(card2));
console.log(luna(card3));
