let counterValue = 0;
let result = document.querySelector('#value');

const decremBtn = document.querySelector('button[data-action="decrement"]');
const incremBtn = document.querySelector('button[data-action="increment"]');

decremBtn.addEventListener('click', subtractValue);
incremBtn.addEventListener('click', addValue);

function subtractValue(){
    counterValue -= 1;
    result.textContent = counterValue;
};

function addValue(){
    counterValue += 1;
    result.textContent = counterValue;
};

