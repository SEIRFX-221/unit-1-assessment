// GLOBAL VARIABLES
let number = 0;
let numberDisplay = document.querySelector('#number-display');
let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let numberInput = document.querySelector('#number-input')
// GLOBAL VARIABLES


// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () => {
    numberDisplay.textContent = number;
    numberInput.value = 1;
})

addButton.addEventListener('click', () => {
    number += parseInt(numberInput.value)
    numberDisplay.textContent = number
} )

subtractButton.addEventListener('click', () => {
    number -= parseInt(numberInput.value)
    numberDisplay.textContent = number
} )
// EVENT LISTENERS