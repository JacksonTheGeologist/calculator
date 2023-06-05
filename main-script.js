const entries = [];
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
    console.log(entry);
  } else if (btn.classList.contains("plus-minus") && negative === false) {
    entry = "-" + entry;
    negative = true;
  } else if (btn.classList.contains("plus-minus") && negative === true) {
    entry = entry.slice(1);
    negative = false;
  } else if (btn.classList.contains("operator")) {
    entries.push(Number(entry));
    entries.push(btn.textContent);
    entry = "";
    doMath(entries);
  } else if (btn.classList.contains("clear")) {
    entries = [];
  }

  display.textContent = entry;
}

function doMath(arr) {
  console.log(arr);
}

// Take user inputs
// Display results
//
