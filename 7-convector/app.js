let salaries = {
  usd: 88,
  eur: 96,
  rub: 1,
};
function convector(sum, currencyName, inCurrencyName) {
  if (salaries[currencyName] && salaries[inCurrencyName]) {
    console.log(
      `из ${sum + currencyName} получится ${
        (salaries[currencyName] / salaries[inCurrencyName]) * sum +
        inCurrencyName
      } `
    );
  } else {
    console.log("данных валют нет");
  }
}
convector(1000, "eur", "usd1");
