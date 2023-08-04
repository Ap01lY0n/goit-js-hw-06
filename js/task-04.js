let counterValue = 0;

const buttonPlus = document.querySelector("[data-action='increment']");
const buttonMinus = document.querySelector("[data-action='decrement']");
const value = document.querySelector("#value");

buttonPlus.addEventListener("click", () => {
    counterValue++;
    value.textContent = counterValue; 
  });

buttonMinus.addEventListener("click", () => {
    counterValue--;
    value.textContent = counterValue; 
  });