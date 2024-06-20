let arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];
const result = arr
  .map(function (element) {
    let result;
    let test1 = element.split("-");
    if (test1.length === 3) {
      result = test1.join("-");
    }
    let test2 = element.split("/");
    if (test2.length === 3) {
      [test2[0], test2[1]] = [test2[1], test2[0]];
      result = test2.join("-");
    }
    // console.log(typeof result);
    return result;
  })
  .filter((element) => {
    if (typeof element !== "undefined") {
      const elArray = element.split("-");
      let day = Number(elArray[0]);
      let manth = Number(elArray[1]);
      let year = Number(elArray[2]);
      let result = "";
      if (
        (year % 4 == 0 && 1 <= day && day <= 29 && manth == 2) ||
        (1 <= day && day <= 28 && manth == 2)
      ) {
        result = element;
      }
      if (1 <= day && day <= 31 && [1, 3, 5, 7, 8, 10, 12].includes(manth)) {
        result = element;
      }
      if (1 <= day && day <= 30 && [4, 6, 9, 11].includes(manth)) {
        result = element;
      }

      return result;
    }
  });

console.log(result);
