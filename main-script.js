let entries = [];
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let entry = "";
let negative = false;
let val;

buttons.forEach((btn) => btn.addEventListener("click", () => getInput(btn)));

function getInput(btn) {
  if (btn.textContent === ".") {
    if (entry.includes(".") === false) {
      entry = entry + btn.textContent;
      display.textContent = entry;
    }
  } else if (Number(btn.textContent)) {
    entry = entry + btn.textContent;
    display.textContent = entry;
  } else if (btn.classList.contains("plus-minus") && negative === false) {
    entry = "-" + entry;
    negative = true;
    display.textContent = entry;
  } else if (btn.classList.contains("plus-minus") && negative === true) {
    entry = entry.slice(1);
    negative = false;
    display.textContent = entry;
  } else if (btn.classList.contains("operator")) {
    entries.push(Number(entry));
    entries.push(btn.textContent);
    entry = "";
    val = getCurVal(entries);
    display.textContent = repeatingDecimal(val);
  } else if (btn.classList.contains("clear")) {
    negative = false;
    entry = "";
    entries = [];

    display.textContent = 0;
  }
}
const divide = "/";
operators = ["X", divide, "+", "-"];
function getCurVal(arr) {
  let curVal;
  let preVal;
  let testVal;
  arr.forEach((entry, index) => {
    if (index === 0) {
      curVal = entry;
    } else if (index < 2) {
    } else if (!isNaN(entry)) {
      preVal = curVal;
    } else {
      testVal = doMath(arr[index - 2], preVal, arr[index - 1]);
      curVal = testVal;
    }
  });
  return curVal;
}
function doMath(operator, var1, var2) {
  switch (operator) {
    case "X":
      return var1 * var2;
    case "/":
      return var1 / var2;
    case "+":
      return var1 + var2;
    case "-":
      return var1 - var2;
    case "%":
      return (var1 - var2) * 100;
    case "=":
      return var1;
  }
}

function repeatingDecimal(num) {
  let charArr = String(num).split("");
  let prev;
  let valCount = 0;
  charArr.forEach((char, i) => {
    if (i === 0) {
      prev = charArr[0];
    } else {
      valCount++;
      prev = char;
    }
  });
  if (valCount > 5) {
    return num.toFixed(4);
  } else {
    return num;
  }
}

const check = repeatingDecimal(4.313);
