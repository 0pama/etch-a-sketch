let input = document.getElementById('input');
let gridsize = document.getElementById('grid-size');

const grid = document.querySelector('.grid');


function display() {
    console.log(input.value);
    gridsize.innerText = input.value + "x" + input.value;


}

function randomColor() {
    document.querySelector('p').innerText = "randomColor"
}

function normalmode() {
    document.querySelector('p').innerText = "normalcolormode"
}


function createGrid() {
    // populating the grid
    grid.innerHTML = '';
   for (let i = 1; i <  input.value * input.value; i++) {
    let div = document.createElement('div');
    div.style.cssText = "border:1px solid black";
    // color options
    const [red, green, blue] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    let color = document.querySelector("#colorset");
    //

    div.addEventListener("mouseover", () => {
        if( document.querySelector('p').innerText == "normalcolormode") {
        div.style.backgroundColor = color.value
        } else {
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        }
    });
    //
   grid.appendChild(div);

   }
}



function reset() {
    grid.innerHTML = '';
}
