let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score")


const genCompChoice=()=>{
   const options=["rock","paper","scissors"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
}


const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw.Play again."
     msg.style.backgroundColor="#081b31"
};


const showWinner=(userWin,userChoice,compChoice)=>{
       if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`You win! Your ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor="green"
       }else{
        console.log("you lose");
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red"
       }
}

const playGame=(userChoice)=>{
     console.log("user choice= ",userChoice); 
       //Generate Compute choice
       const compChoice=genCompChoice();
       console.log("computer choice = ",compChoice);
       if(userChoice===compChoice){
        //draw game
        drawGame();
       }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
           userWin= compChoice==="paper"?false:true;

        }else if(userChoice==="paper"){
            //comp=>scissors,rock
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //comp=>rock,paper
             userWin=compChoice==="rock"?false:true;
        }
          showWinner(userWin,userChoice,compChoice);
       }
     
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
     playGame(userChoice);
   
    });
});