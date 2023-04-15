console.log('Yerrrr')
const countEl = document.getElementById("count");
const countInput = document.getElementById("countInput");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let count = 0;

function updateCount() {
  countEl.textContent = count;
  countEl.style.color = count < 0 ? "red" : "black";
}

function handlePlusClick() {
  const value = parseInt(countInput.value);
  count += value;
  updateCount();
}

function handleMinusClick() {
  const value = parseInt(countInput.value);
  count -= value;
  updateCount();
}

function handleMouseOver(event) {
  event.target.style.backgroundColor = "#333";
  event.target.style.color = "#fff";
}

function handleMouseOut(event) {
  event.target.style.backgroundColor = "#ccc";
  event.target.style.color = "#333";
}

plusBtn.addEventListener("click", handlePlusClick);
minusBtn.addEventListener("click", handleMinusClick);
plusBtn.addEventListener("mouseover", handleMouseOver);
plusBtn.addEventListener("mouseout", handleMouseOut);
minusBtn.addEventListener("mouseover", handleMouseOver);
minusBtn.addEventListener("mouseout", handleMouseOut);

updateCount();