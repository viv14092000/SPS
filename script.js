let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let mssg=document.querySelector("#msg");
const userPoints=document.querySelector("#user-score");
const compPoints=document.querySelector("#comp-score");



const matchDraw=()=>{
    console.log("Match is draw");
    mssg.innerText="Match is draw";
    mssg.style.backgroundColor="#1d114f"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        console.log("Congrats you win");
        mssg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor="green"
        userScore++;
        userPoints.innerText=userScore;
    }
    else{
        console.log("You lose!")
        mssg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        mssg.style.backgroundColor="red"
        compScore++;
        compPoints.innerText=compScore;

    }
}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}

const playGame=(userChoice)=>{
    console.log("userChoice is",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice is",compChoice);
    // game is draw
    if(userChoice===compChoice){
        matchDraw();
    }
    // game is not draw
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(compChoice==="paper") userWin=false;
            else userWin=true;
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissor") userWin=false;
            else userWin=true;
        }
        else if(userChoice==="scissor"){
            if(compChoice==="rock") userWin=false;
            else userWin=true;
        }
        console.log(userWin);
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});