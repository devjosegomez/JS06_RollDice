const output = document.querySelector("#output");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const button = document.querySelector("button");

button.addEventListener("click",() =>{
    console.log(1);
    let rolls = [roll(6), roll(6)];
    console.log(rolls);
});

function roll(n){
    let randomNumber = Math.floor(Math.random()*n)+1;
    return randomNumber;
}
