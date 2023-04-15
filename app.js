// Get count display, buttons, and input elements
const countDisplay = document.getElementById("count-display");
const incrementButton = document.getElementById("increment-button");
const decrementButton = document.getElementById("decrement-button");
const inputValue = document.getElementById("input-value");
// Add click event listner to increment button
incrementButton.addEventListener("click", () => {
    const value = parseInt(inputValue.value);
    const currentCount = parseInt(countDisplay.textContent);
    const newCount = currentCount + value;
    countDisplay.textContent = newCount;
    // Set the text color to red if the new count is negative
    if (newCount < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
});
// Add event listner to the decrement button
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
