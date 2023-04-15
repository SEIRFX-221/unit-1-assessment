let counterValue = 0;

let body = document.querySelector('body');

let counterContainer = document.createElement('section');
counterContainer.setAttribute('id', 'counter-container');

let addBtn = document.createElement('button');
addBtn.textContent = '+';
let minusBtn = document.createElement('button')
minusBtn.textContent = '-';
let digitInput = document.createElement('input');
digitInput.placeholder = '0';
let displayText = document.createElement('div');
displayText.setAttribute('id', 'display-text')
displayText.textContent = counterValue;

body.appendChild(counterContainer);
counterContainer.appendChild(displayText);
counterContainer.appendChild(minusBtn);
counterContainer.appendChild(digitInput);
counterContainer.appendChild(addBtn);
digiVal = document.querySelector('input').value;
console.log(digiVal);
addBtn.addEventListener("click", function () {
    digiVal = document.querySelector('input').value;
    console.log(digiVal);
    counterValue++;
    displayText.textContent = counterValue + parseInt(digiVal);
    console.log(displayText);
});

minusBtn.addEventListener("click", function () {
    displayText.textContent = counterValue - parseInt(digiVal);
    counterValue--;
    displayText.textContent = counterValue;
    console.log(digitInput.value);
});

