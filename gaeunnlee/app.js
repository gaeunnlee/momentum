const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

let colorA;
let colorB;
let A;
let B;
const btn = document.querySelector("button");
const body = document.querySelector("body");
function clickHandler() {
    while (true) {
    A = Math.floor(Math.random() * colors.length)
    B = Math.floor(Math.random() * colors.length)
        if (A!==B) {
           
            colorA = colors[A]
            colorB = colors[B]
            body.style.background = `linear-gradient(to left,${colorA},${colorB})`            
            break;
        }         
    }   
}  
btn.addEventListener("click",clickHandler)