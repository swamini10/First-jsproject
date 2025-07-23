let gameseq = [];
let userseq = [];

let btns=["yellow","pink","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("game started");
        started = true;
        levelup();
}
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);    
    console.log(gameseq);
    gameflash(randbtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }   
    }else{
        h2.innerHTML =`Game Over !Your Score Was <b>${level}</b> <br>Press any key To Start.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor ="white";
        }, 150);
        reset();
   }
}
function btnpress(){
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started =false;
    gameseq =[];
    userseq =[];
    level = 0;
}