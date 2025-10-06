let gameSeq=[];
let userSeq=[];
let start= false;
let level= 0;
let btns=["yellow", "red", "green", "blue" ];
let h2=document.querySelector('h2');
document.addEventListener('keypress', function(){
    if(start==false){ //taaki baar baar game start naa ho koi  na koi key press karne par
        console.log("Game has started");
        start= true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add('flash'); 
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 100);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText="Level "+level;

    //chossing random button to flash when the game starts
    let rndmIdx=Math.floor(Math.random()*3); //fetches the random index from the array of colors
    let rndmColor=btns[rndmIdx]; //fetches the random color from the index
    let rndmBtn=document.querySelector(`.${rndmColor}`);
    gameSeq.push(rndmColor);
    btnFlash(rndmBtn);

}
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over! Your score was ${level}. Press any key to start`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}