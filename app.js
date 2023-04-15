const math = document.getElementById('math');
const result = document.getElementById('result');
const plus = document.getElementById('plus');
const input = document.getElementById('input');
const minus = document.getElementById('minus');

input.value = 1;
result.textContent = '0';

function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}

plus.addEventListener('click', function () {
    let inputValue = input.value;
    let resultValue = result.value;
    result.textContent = addition(inputValue, resultValue);
    console.log('this shouldnt be undefined', result.value);
    return result;
})


minus.addEventListener('click', function () {
    let inputValue = input.value;
    let resultValue = result.value;
    result.textContent = subtraction(inputValue, resultValue);
    return result.value;
})

