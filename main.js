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
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px sans-serif`;
  const textWidth = ctx.measureText(value).width;
  const padding = 5;
  const adjustedWidth = textWidth + padding * 2 + 10;
  input.style.width = `${adjustedWidth}px`;
}


input.addEventListener("input", inputWidth);
window.addEventListener("resize", inputWidth);

inputWidth();

document.getElementById("plusButton").addEventListener("click", addNumber);
document.getElementById("minusButton").addEventListener("click", subtractNumber);

