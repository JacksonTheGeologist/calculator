let entries = [];
const numbers = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
let entry = "";
let negative = false;

buttons.forEach((btn) => btn.addEventListener("click", () => getInput(btn)));

function getInput(btn) {
  console.log();
  if (Number(btn.textContent)) {
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
    doMath(entries);
    // console.log(entries);
  } else if (btn.classList.contains("clear")) {
    entries = [];
  }

  display.textContent = entry;
}

function doMath(arr) {
  let curVal;
  let prevVal;
  arr.forEach((entry, index) => {
    if (index === 0) {
      curVal = entry;
    } else if (
      entry === "&#247" ||
      entry === "+" ||
      entry === "-" ||
      entry === "X"
    ) {
      prevVal = curVal;
    }
  });
}

// Take user inputs
// Display results
//
