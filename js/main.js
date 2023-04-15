console.log('you can do it!')
// DOM Elements
let number = 0
let numberDisplay = document.querySelector('#number-display');
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var inputNumber = document.getElementById("input-number");
var count = document.getElementById("count");

// Event Listeners
window.addEventListener('DOMContentLoaded', () => {
    numberDisplay.textContent = number;
    inputNumber.value = 1;
});

addButton.addEventListener('click', () => {
    number += parseInt(inputNumber.value)
    numberDisplay.textContent = number

});

subtractButton.addEventListener('click', () => {
    number -= parseInt(inputNumber.value)
    numberDisplay.textContent = number

});

// Bonus Color if Negative
