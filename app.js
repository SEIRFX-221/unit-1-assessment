const math = document.getElementById('math');
const result = document.getElementById('result');
const plus = document.getElementById('plus');
const input = document.getElementById('input');
const minus = document.getElementById('minus');


result.value = 0;
// result.innerText = Number('0');

function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}



plus.addEventListener('click', function () {
    let inputValue = Number(document.getElementById('input').value);
    let resultValue = Number(document.getElementById('result').value);
    result.value = addition(inputValue, resultValue);
    console.log('this shouldnt be undefined', result.value);
    result.innerText = result.value;
    if (result.value >= 0) {
        result.style.color = 'black';
    } else if (result.value < 0) {
        result.style.color = 'red';
    } else {
        return null;
    }
    return resultValue;
})


minus.addEventListener('click', function () {
    let inputValue = Number(document.getElementById('input').value);
    let resultValue = Number(document.getElementById('result').value);
    result.value = subtraction(resultValue, inputValue);
    console.log('tell me what my answer is', result.value);
    result.innerText = result.value;
    if (result.value >= 0) {
        result.style.color = 'black';
    } else if (result.value < 0) {
        result.style.color = 'red';
    } else {
        return null;
    }
    return resultValue;
})

