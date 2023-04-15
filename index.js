//====== Global DOM Variables
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const userInput = document.querySelector("#userInput");
const output = document.querySelector("#count");

//====== Event Listeners
subtract.addEventListener("click", () => handleMath("-"));
add.addEventListener("click", () => handleMath("+"));

//Perform the math operation
function handleMath(operator) {
  let currentCount = parseInt(output.textContent);
  let countSize = parseInt(userInput.value);
  if (countSize) {
    switch (operator) {
      case "-":
        currentCount -= countSize;
        break;
      case "+":
        currentCount += countSize;
        break;
    }
    output.textContent = currentCount;
  }
  //Change color to red if count is below zero
  if (currentCount < 0) {
    output.style.color = "red";
  } else {
    output.style.color = "black";
  }
}
