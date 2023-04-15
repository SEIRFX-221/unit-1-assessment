//================================================
// Constants
//================================================
let countVal;
let changeByVal;


//================================================
// DOM elements
//================================================
const countDOM = document.querySelector('#count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const changeBy = document.querySelector('#change-by');

//================================================
// Event Listeners
//================================================
plusButton.addEventListener('click', () => {
    let countVal = Math.floor(countDOM.textContent);
    let changeByVal = Math.floor(changeBy.value);

    countVal = countVal + changeByVal;
    countDOM.textContent = countVal;

    if(countVal >= 0) {
        countDOM.setAttribute('class', 'black');
    }
});

minusButton.addEventListener('click', () => {
    let countVal = Math.floor(countDOM.textContent);
    let changeByVal = Math.floor(changeBy.value);

    countVal = countVal - changeByVal;
    countDOM.textContent = countVal;

    if(countVal < 0) {
        countDOM.setAttribute('class', 'red');
    }
});