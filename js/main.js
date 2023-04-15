const counterValue = 0;

 

// Select body tag from boilerplate
const body = document.querySelector('body');
console.log(body);

// created html element 'div' to conatin the counter 
const counterContainer = document.createElement('div');
counterContainer.setAttribute('id', 'counter-container');
console.log(counterContainer);

// created buttons for the UI
const addBtn = document.createElement('button');
addBtn.textContent = '+';
const minusBtn = document.createElement('button')
minusBtn.textContent = '-';
// Test the newly created elements
console.log(addBtn, minusBtn);
const digitInput = document.createElement('input');
digitInput.placeholder = '0';
console.log(digitInput);
const displayText = document.createElement('span');
displayText.setAttribute('id', 'display-text')
displayText.textContent = counterValue.valueOf(counterValue);
// testing the span for displaying digits
console.log(displayText);


body.appendChild(counterContainer);
counterContainer.appendChild(displayText);
counterContainer.appendChild(minusBtn);
counterContainer.appendChild(digitInput);
counterContainer.appendChild(addBtn);

console.log(body);




addBtn.addEventListener("click", function(){


  });

  minusBtn.addEventListener("click", function(){

   });