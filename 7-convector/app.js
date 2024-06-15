const salaries = {
  usd: 88,
  eur: 96,
  rub: 1,
};
function convector(sum, currencyName, inCurrencyName) {
  currencyName = currencyName.toLowerCase();
  inCurrencyName = inCurrencyName.toLowerCase();

  if (salaries[currencyName] && salaries[inCurrencyName]) {
    return ((salaries[currencyName] / salaries[inCurrencyName]) * sum).toFixed(
      2
    );
  } else {
    return null;
  }
}
console.log(convector(960, "EUR", "RUB"));
