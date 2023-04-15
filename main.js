console.log("testing...hello");

const input = document.getElementById("input");
input.value = 1;

const calculatedNumber = document.getElementById("finalCount");

let count = 0

function addNumber() {
  count += Number(input.value);
  calculatedNumber.textContent = count;
}

function subtractNumber() {
  count -= Number(input.value);
  calculatedNumber.textContent = count;
}

document.getElementById("plusButton").addEventListener("click", addNumber);
document.getElementById("minusButton").addEventListener("click", subtractNumber);