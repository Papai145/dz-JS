const card = "4561-2612-1234-5467";

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
  return count;
}
console.log(luna(card));
