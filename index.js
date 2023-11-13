let input = document.getElementById('input');
let gridsize = document.getElementById('grid-size');

const grid = document.querySelector('.grid');


function display() {
    console.log(input.value);
    gridsize.innerText = input.value + "x" + input.value;


}

function createGrid() {
    grid.innerHTML = '';
   for (let i = 1; i <  input.value * input.value; i++) {
    let div = document.createElement('div');
    div.style.cssText = "border:1px solid black"    
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black"
    });
   grid.appendChild(div);

   }
}



function reset() {
    grid.innerHTML = '';
}


console.log
