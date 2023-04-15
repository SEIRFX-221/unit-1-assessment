let counter = document.getElementById('counter')
const addButton = document.getElementById('addButton')
const subtractButton = document.getElementById('subtractButton')
const input = document.getElementById('input')
let count = 0
counter.innerText = count
// let inputValue = input.value;
// console.log(inputValue);

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

    if (countValue <= -1) {
        counter.style.color = 'red';
    }
})

// function updateCounter(){
//     counter.textContent = count
// }

