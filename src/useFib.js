import makeFibArr from "./fib";

const fibForm = document.querySelector("#fib-form");
const fibOuput = document.querySelector("#fib-output");
const fibInput = document.querySelector("#fib");

fibForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fibArr = makeFibArr(parseInt(fibInput.value));

  fibArr.forEach((num) => {
    const p = document.createElement("p");
    p.textContent = num;
    p.classList.add("fib-num");
    fibOuput.appendChild(p);
  });
});
