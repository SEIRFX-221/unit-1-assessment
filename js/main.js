console.log("hello world");

document.addEventListener('DOMContentLoaded', () => {
    // get DOM elements
    const count = document.getElementById('count');
    const input = document.getElementById('input');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
  
    let count1 = 0; 
  
    plusBtn.addEventListener('click', () => {
        count1 += parseInt(input.value);
        count.innerText = count1;
        count.style.color = count1 < 0 ? 'red' : 'black';
    });
  
    minusBtn.addEventListener('click', () => {
        count1 -= parseInt(input.value);
        count.innerText = count1; 
        count.style.color = count1 < 0 ? 'red' : 'black';
    });
  });

