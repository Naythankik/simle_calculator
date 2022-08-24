let buttons = document.getElementsByClassName("button");
let arr = [...buttons];

let themes = ["default-theme", "theme-light", "theme-dark"];
let bodyContainer = document.querySelector(".body");

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    bodyContainer.className = themes[index];
    element.style.opacity = "1";

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

// The algorithm for calculating the keys pressed
let displayTab = document.querySelector("#display-context");
let deleteButton = document.querySelector(".delete");
let resetButton = document.querySelector(".reset");
let equalButton = document.querySelector(".equal");
let decimalButton = document.querySelector(".decimal");
let keyValues = document.querySelectorAll(".keyValue");
let operators = document.querySelectorAll(".operator");

// when the reset button is pressed, set the display content to 0
resetButton.addEventListener("click", function () {
  displayTab.textContent = "0";
});
let valueDisplay = "";
// for (let i = 0; i < keyValues.length; i++) {
//   keyValues[i].addEventListener("click", function () {
//     valueDisplay += keyValues[i].innerHTML;
//     displayTab.textContent = valueDisplay;
//   });
// }

// equalButton.addEventListener("click", function () {
//   let valueEntered = displayTab.textContent.split(/[+,-,x,/]/);
//   console.log(valueEntered);
// });

keys = document.querySelector(".calculator");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    let button = e.target.innerHTML;
    valueDisplay += button;
    displayTab.textContent = valueDisplay;
    switch (button) {
      case "DEL":
        console.log("delete");
        console.log(displayTab.textContent);
        // displayTab.textContent -= valueDisplay;
        break;
      case "x":
        console.log("Multiply");
        break;
      case "+":
        console.log("add");
        break;
      case "-":
        console.log("Subtract");
        break;
      case "/":
        console.log("Divide");
        break;
      case "RESET":
        console.log("Reset");
        break;
      default:
        "";
    }
  }
});
