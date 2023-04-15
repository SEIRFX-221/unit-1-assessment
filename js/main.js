// Select body tag from boilerplate
let body = document.querySelector('body');
console.log(body);

// created html element 'div' to conatin the counter 
let counterContainer = document.createElement('div');
console.log(counterContainer);

// created buttons for the UI
let addBtn = document.createElement('button');
addBtn.textContent = '+';
let minusBtn = document.createElement('button')
minusBtn.textContent = '-';
// Test the newly created elements
console.log(addBtn, minusBtn);
let digitInput = document.createElement('input');
digitInput.placeholder = '0';
console.log(digitInput);



let displayText = document.createElement('span');
displayText.textContent = '0';

console.log(displayText);

