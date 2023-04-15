console.log("testing...hello");

const input = document.getElementById("input");
input.value = 1;

const finalCount = document.getElementById("finalCount");

let count = 0

function textColor() {
  finalCount.textContent = count;
  if (count < 0) {
    finalCount.style.color = "red";
  } else {
    finalCount.style.color = "black";
  }
}

function addNumber() {
  count += Number(input.value);
  finalCount.textContent = count;
  input.value = "";
  textColor();
}

function subtractNumber() {
  count -= Number(input.value);
  finalCount.textContent = count;
  input.value = "";
  textColor();
}

function inputWidth() {
  const value = input.value || "";
  const fontSize = parseFloat(window.getComputedStyle(input).getPropertyValue("font-size"));
  const padding = 5;
  const adjustedWidth = value.length * fontSize + padding;
  input.style.width = `${adjustedWidth}px`;
}

input.addEventListener("input", inputWidth);



document.getElementById("plusButton").addEventListener("click", addNumber);
document.getElementById("minusButton").addEventListener("click", subtractNumber);

