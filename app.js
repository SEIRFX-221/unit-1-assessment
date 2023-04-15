const countDisplay = document.getElementById("count-display");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const inputValue = document.getElementById("input-value");

incrementButton.addEventListener("click", () => {
    const value = parseInt(inputValue.value);
    const currentCount = parseInt(countDisplay.textContent);
    const newCount = currentCount + value;
    countDisplay.textContent = newCount;

    if (newCount < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
});

decrementButton.addEventListener("click", () => {
    const value = parseInt(inputValue.value);
    const currentCount = parseInt(countDisplay.textContent);
    const newCount = currentCount - value;
    countDisplay.textContent = newCount;

    if (newCount < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
});
