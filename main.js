// console.log('link check')
//Variables
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const inputNumber = document.getElementById('input-number');
const result = document.getElementById('result');
let currentValue = 0;


//Event Listeners 
//addition
addButton.addEventListener('click', () => {
    //converting a string to integer/number and function for adding
    const number = parseInt(inputNumber.value);
    if (!isNaN(number)) {
      currentValue += number;
      result.textContent = currentValue;
      //if number is less than 0, turn red
      if (currentValue < 0) {
        result.classList.add('negative');
      } else {
        result.classList.remove('negative');
      }
    }
  });
  //subtraction
  subtractButton.addEventListener('click', () => {
    const number = parseInt(inputNumber.value);
    if (!isNaN(number)) {
      currentValue -= number;
      result.textContent = currentValue;
      if (currentValue < 0) {
        result.classList.add('negative');
      } else {
        result.classList.remove('negative');
      }
    }
  });