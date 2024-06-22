let arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const result = arr
  .map(function (str) {
    let day, month, year;
    if (str.includes("/")) {
      [month, day, year] = str.split("/");
    } else if (str.includes("-")) {
      [day, month, year] = str.split("-");
    }
    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
      return null;
    }
    return [day, month, year];
  })
  .filter((array) => {
    if (array === null) {
      return false;
    }

    [day, month, year] = array.map(Number);
    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    // check month
    if (month < 1 || month > 12 || year <= 0) {
      return false;
    }

    // check day
    if (day < 1 || day > 31) {
      return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
      return false;
    }

    // check February for correct day and leap year
    if (month === 2 && ((day === 29 && !isLeapYear) || day > 29)) {
      return false;
    }
    return true;
  })
  .map((array) => {
    return array
      .map((x, i) => (i === 2 ? x.padStart("0", 4) : x.padStart("0", 2)))
      .join("-");
  });
console.log(result);
