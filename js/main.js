const input = document.getElementById('input');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const countDisplay = document.getElementById('count-display');

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

minusButton.addEventListener('click', () => {
    const inputValue = Number(input.value);
    if (inputValue > 1) {
        count -= inputValue;
        updateCount();
    }
});

plusButton.addEventListener('click', () => {
    const inputValue = Number(input.value);
    count += inputValue;
    updateCount();
});


minusButton.addEventListener('mouseover', () => {
    minusButton.classList.add('hover');
});

minusButton.addEventListener('mouseout', () => {
    minusButton.classList.remove('hover');
});

plusButton.addEventListener('mouseover', () => {
    plusButton.classList.add('hover');
});

plusButton.addEventListener('mouseout', () => {
    plusButton.classList.remove('hover');
});

updateCount();
