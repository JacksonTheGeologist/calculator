let entries = [];
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let entry = "";
let negative = false;

buttons.forEach((btn) => btn.addEventListener("click", () => getInput(btn)));

function getInput(btn) {
  console.log();
  if (btn.textContent === ".") {
    if (entry.includes(".") === false) {
      entry = entry + btn.textContent;
    }
  } else if (Number(btn.textContent)) {
    entry = entry + btn.textContent;
  } else if (btn.classList.contains("plus-minus") && negative === false) {
    entry = "-" + entry;
    negative = true;
  } else if (btn.classList.contains("plus-minus") && negative === true) {
    entry = entry.slice(1);
    negative = false;
  } else if (btn.classList.contains("operator") && entry.length > 0) {
    entries.push(Number(entry));
    entries.push(btn.textContent);
    entry = "";
    getCurVal(entries);
    // console.log(entries);
  } else if (btn.classList.contains("clear")) {
    entries = [];
  }
  doMath;

  display.textContent = entry;
}
const divide = "&#247";
function getCurVal(arr) {
  console.log("h");
  let curVal;
  let preVal;

  console.log(entries);
  arr.forEach((entry, index) => {
    //4 conditions right?
    //First number --> display after pushing the operator
    //

    //Make this another function at some point

    if (index === 0) {
      curVal = entry;
    } else if (index === 1) {
      display.textContent = curVal;

      //ends logic function
    } else if (index === arr.length - 1) {
      display.textContent = curVal;
      //finishes the math!
    } else if (entry === "X") {
      preVal = curVal;
      curVal = entry;
      doMath("X", preVal, curVal);
    } else if (entry === divide) {
      preVal = curVal;
      curVal = doMath("/", preVal, curVal);
    } else if (entry === "+") {
      operator = "+";
      preVal = curVal;
      curVal = doMath("+", preVal, curVal);
    } else if (entry === "-") {
      operator = "+";
      preVal = curVal;
      curVal = doMath("+", preVal, curVal);
    } else if (entry === "=") {
      let val = doMath("=", preVal, curVal);
      //set display
      display.textcontent = val;
      //clear array
      //set array = [curVal]
      //math stuff}
    }
  });
}
function doMath(operator, var1, var2) {
  switch (operator) {
    case "X":
      return var1 * var2;
    case divide:
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

let testMath = doMath("+", 100, 10);
console.log(testMath);
// Take user inputs
// Display results
b;
