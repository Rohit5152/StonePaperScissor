const choices =document.querySelectorAll('.choice');
const score=document.getElementById('score');
const result=document.getElementById('result');
const restart=document.getElementById('restart');
const modal=document.querySelector('.modal');
const scoreboard={
    player:0,
    computer:0
};
function play(e){
    const playerchoice=e.target.id;
    restart.style.display='inline-block';
    const computerchoice=getcomputerchoice();
    console.log(e.target.id);
    console.log(computerchoice);
  const winner= getwinner(playerchoice,computerchoice);
  console.log('winner :'+ winner);
 showwinner(winner,computerchoice);
}
function getwinner(a,b){
if(a===b){
    return 'draw';
} else if(a ==='rock'){
    if(b ==='paper'){
        return 'computer';
    }
    else{
        return 'player';
    }
}
else if(a==='paper'){
    if(b  ==='rock'){
        return 'Player';
    }
    else{
        return 'computer';
    }
}
else if(a  ==='scissors'){
    if(b  ==='rock'){
        return 'computer';
    }
    else{
        return 'player';
    }
}

}
 function getcomputerchoice(){
     const rand= Math.random();
     if(rand <0.33)
     {
         return 'rock';
     }
     else if(rand<= 0.66){
         return 'paper';
     }
     else{
         return 'scissors';
     }
 }
 function showwinner(winner,computerchoice){
     if(winner=== 'player'){
         scoreboard.player++;
         result.innerHTML=`
         <h1 class="text-win">You Win</h1>
         <i class="fas fa-hand-${computerchoice} fa-8x"></i>
         <p>Computer Chose: <strong>${computerchoice.charAt(0).toUpperCase()+computerchoice.slice(1)}</strong></p>
         `;
     }
     else if(winner=== 'computer'){
        scoreboard.computer++;
        result.innerHTML=`
        <h1 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${computerchoice} fa-8x"></i>
        <p>Computer Chose: <strong>${computerchoice.charAt(0).toUpperCase()+computerchoice.slice(1)}</strong></p>
        `;
     }else{
    
        result.innerHTML=`
        <h1>It's a Draw!</h1>
        <i class="fas fa-hand-${computerchoice} fa-8x"></i>
        <p>Computer Chose: <strong>${computerchoice.charAt(0).toUpperCase()+computerchoice.slice(1)}</strong></p>
        `;
     }


     //Show Score
     score.innerHTML=`
     <p>Player:${scoreboard.player}</p>
     <p> Computer:${scoreboard.computer}</p>
     `;

     modal.style.display='block';
 }
 window.addEventListener('click',clearmodal);
 function clearmodal(e){
     if(e.target== modal){
         modal.style.display='none';
     }
 }
choices.forEach(function(choice){
    choice.addEventListener('click',play);
})


//to restart the game
function restartgame(e){
    scoreboard.player=0;
    scoreboard.computer=0;
    score.innerHTML=`
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}
restart.addEventListener('click',restartgame);