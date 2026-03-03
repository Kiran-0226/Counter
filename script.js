const counter = document.getElementById('count');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');

let count = 0;

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
})

reset.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
})