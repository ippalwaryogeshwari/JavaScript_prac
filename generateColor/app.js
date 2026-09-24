let red = Math.floor(Math.random()*255)+1;
let green = Math.floor(Math.random()*255)+1;
let blue = Math.floor(Math.random()*255)+1;

let container = document.querySelector('.container');

container = `(${red},${green},${blue})`;
console.log(container);
