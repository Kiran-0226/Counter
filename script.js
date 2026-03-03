const counter = document.getElementById('count');
const increment = document.getElementById('increment');

let count = 0;

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
})