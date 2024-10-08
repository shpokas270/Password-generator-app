"user strict";

//Global scope
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let gnrtPassBtn = document.querySelector("#gen-pass");
let firstPassField = document.querySelector(".text-field-first");
let secondPassField = document.querySelector(".text-field-second");
let whenClicked = document.querySelector(".when-clicked");

function genNewPass() {
  // variables for passwords
  let firstPassword = "";
  let secondPassword = "";
  // loop to generate a 15char pass
  for (let i = 0; i < 15; i++) {
    firstPassword += characters[Math.floor(Math.random() * characters.length)];
    secondPassword += characters[Math.floor(Math.random() * characters.length)];
  }
  // display passwords
  firstPassField.textContent = firstPassword;
  secondPassField.textContent = secondPassword;
}

//copy on click functionality

firstPassField.addEventListener(`click`, function () {
  const originalText = this.innerText;
  const textToCopy = originalText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      this.innerText = "Copied!";

      setTimeout(() => {
        this.innerText = originalText;
      }, 1000);
    })
    .catch((err) => {
      console.log(`Failed to copy text: `, err);
    });
});

secondPassField.addEventListener(`click`, function () {
  const originalText = this.innerText;
  const textToCopy = originalText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      this.innerText = "Copied!";

      setTimeout(() => {
        this.innerText = originalText;
      }, 1000);
    })
    .catch((err) => {
      console.log(`Failed to copy text: `, err);
    });
});
