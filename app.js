// DECLARE VARIABLES AND GRAB HTML ELEMENTS
let countDisplay = document.querySelector('.count-display');
let buttonPlus = document.querySelector('.plus');
let buttonMinus = document.querySelector('.minus');
let input = document.querySelector('.input');
let count = 0;



function buttonPlusHit() {
    countDisplay = document.querySelector('.count-display');
    let inputValue = input.value;
    if (countDisplay.textContent === '0') {
        count = parseInt(inputValue);
        countDisplay.textContent = 0 + count;
        countDisplay = document.querySelector('.count-display');
        colorBlackPositive();
    } else if (countDisplay.textContent !== '0' ){
        count = parseInt(inputValue);
        countDisplay.textContent = parseInt(countDisplay.textContent) + count;
        countDisplay = document.querySelector('.count-display');
        colorBlackPositive();
    } 

}
buttonPlus.addEventListener('click', buttonPlusHit);

function buttonMinusHit() {
    countDisplay = document.querySelector('.count-display');
    let inputValue = input.value;
    if (countDisplay.textContent === '0') {
        count = parseInt(inputValue);
        countDisplay.textContent = 0 - count;
        countDisplay = document.querySelector('.count-display');
        colorRedNegative();
    } else if (countDisplay.textContent !== '0') {
        countDisplay = document.querySelector('.count-display');
        count = parseInt(inputValue);
        countDisplay.textContent -= count;
        countDisplay = document.querySelector('.count-display');
        colorRedNegative();
    }
}

buttonMinus.addEventListener('click', buttonMinusHit);

function colorRedNegative() {
    countDisplay = document.querySelector('.count-display');
    if (parseInt(countDisplay.textContent) < 0) {
        countDisplay.style.color = 'red';
    }
}

function colorBlackPositive() {
    countDisplay = document.querySelector('.count-display');
    if (parseInt(countDisplay.textContent) > 0) {
        countDisplay.style.color = 'black';
    }
}