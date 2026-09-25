//const max = prompt("enter the maximum number to generate number :");

// console.log(max);


//let guess = prompt("guess the number ");
// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess==random){
//         console.log("you are right congrats!! random number was ", random);
//         break;
//     }else if(guess<random){
//         guess = prompt("hint: your guess was too small. please try again.");
//     }
//     else{
//         guess = prompt("hint: your guess was too large. please try again.");
//     }
// }
let heading = document.querySelector(".heading");
let para = document.querySelector(".para");
let box = document.querySelector("box");
let body = document.querySelector("body");
let plybtn = document.querySelector(".playbtn");
let max;

let btn = document.createElement("button");
let random = document.createElement("p");

plybtn.addEventListener("click", ()=>{
    let newp =  document.createElement("p");
    max = prompt("Enter the maximum number to generate number :");
    newp.innerText = (`Generate Number from 1 to : ${max}`);
    body.append(newp);
    console.log(newp);
    
    btn.innerText = "Generate Number";
    body.append(btn);

})

btn.addEventListener("click" , ()=>{
    random.innerText = Math.floor(Math.random()*max )+1;
    let par = document.createElement("p");
    par.innerText = "Number is Generator , Guess the number "; 
    body.appendChild(par);
    console.log(par);
    console.log(random);
    
})

let guess = prompt("guess Generator number : ");
console.log(guess);

