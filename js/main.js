let counter = document.getElementById('counter')
const addButton = document.getElementById('addButton')
const subtractButton = document.getElementById('subtractButton')
const input = document.getElementById('input')
let count = 0
counter.innerText = count


addButton.addEventListener('click', ()=>{
    let inputValue = input.value
    let parseValue = parseInt(inputValue)
    let countValue = parseInt(counter.textContent)
    console.log(countValue)
    console.log(inputValue)
    if(inputValue){
        counter.textContent = countValue + (parseValue)
    } else if (!inputValue){
        count++ 
        counter.textContent = count
    }
    if (countValue < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black';
    }

}) 
subtractButton.addEventListener('click', ()=>{
    let inputValue = input.value
    let parseValue = parseInt(inputValue)
    let countValue = parseInt(counter.textContent)
    console.log(countValue)
    console.log(inputValue)
   
    if(inputValue) {
        counter.textContent = countValue - (parseValue)
    } else if (!inputValue){
        count--
        counter.textContent = count;
    } 
    if (countValue < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black';
    }
  
})



