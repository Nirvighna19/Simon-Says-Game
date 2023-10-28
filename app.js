let gameSeq=[];
let userSeq=[];

let btns=['red','blue','green','yellow'];

let level=0;
let started=false;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },200);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;

    let rand=Math.floor(Math.random()*3);
    let randCol=btns[rand];
    let randBtn=document.querySelector(`.${randCol}`);
    console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },200);
}

function checkVal(idx){
    // let idx=level-1;

    if(userSeq[idx]==gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML=`Game over! your score is ${level-1} <br> Press any ket to restart`;
        level=0;
        gameSeq=[];
        userSeq=[];
        started=false;
    }
   

    console.log(gameSeq);
    console.log(userSeq);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userCol=btn.getAttribute("id");
    userSeq.push(userCol);

    checkVal(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}