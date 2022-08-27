const calc = document.querySelector(".calculator");
const one = document.getElementById("first");
const first = document.querySelector(".keyValue");
const display = document.getElementById("display-context");
let x;

window.onload = () => {
  display.textContent = 0;
};

calc.addEventListener("click", (e) => {
  const filler = () => {
    if (e.target.value != undefined) {
      display.textContent += e.target.value;
    }
  };

  filler();

  if (e.target.textContent === "=") {
    let x = display.textContent;
    let y = eval(x);
    display.textContent = y;
  } else if (e.target.textContent === "RESET") {
    display.textContent = 0;
  } else if (e.target.textContent === "DEL") {
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 1
    );
  }
});

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
