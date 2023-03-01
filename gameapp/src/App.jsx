import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   const [playerName , setplayername] = useState("")
  let cards = []
  let sum  = 0;
  let hasBlackJack = false
  let message = ""
 
  let isAlive = false;

  console.log(cards)

  let player ={
    name : playerName,
    Chip : 145
  }


 

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1; //it return no between 0 to 12.99 inorder to get 13 we add 1
 if(randomNumber > 10){
  return 10;
 }else if(randomNumber === 1){
 return 11;
 }else{
  return randomNumber;
 }


}



 
function startGame(){
  document.getElementById("player-el").innerHTML = player.name + ": $" + player.Chip;
 
   isAlive = true
  let firstCard = getRandomCard()
  let secondCard  = getRandomCard()
  cards =[firstCard , secondCard]
  sum = firstCard + secondCard;
  
  renderGame()
  
}



 
  function renderGame(){
     
    document.querySelector("#card-el").textContent = "Cards: "
    for(let i = 0 ; i < cards.length ; i ++){
      document.querySelector("#card-el").textContent += cards[i] + " "
  
    }
      document.getElementById("sum").innerHTML = "Sum" + ":" + "" + sum
   if(sum <= 20){
    message = "Do you want to draw a new card"
     isAlive = true
   }else if(sum === 21){
      message = "Whoo! you have got blackjack!"
      hasBlackJack = true;
   isAlive = true
   }else{
    message = "You're out of game!"
     isAlive =false
   }

   document.getElementById("message-el").innerHTML = message

  }

//   function renderGame() {
//     document.querySelector("#card-el").textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//       document.querySelector("#card-el").textContent += cards[i] + " "
//     }
    
//     document.getElementById("sum").textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     document.getElementById("message-el").textContent = message
// }




  function newCard() {
    if(isAlive === true && hasBlackJack === false){
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()
    }
    
}

  return ( 
    <div className="App">
     <h1>BlackJack</h1>
     ENTER YOUR NAME :  <input type="text"  onChange={(e)=>{
      setplayername(e.target.value)
     }} />
     <p id="message-el">
      Want to play a round
     </p>
     <p id='card-el'>Cards</p>
     <p id='sum'></p>
     
     <button onClick={()=>startGame()}>START GAME</button> <br />
     <button onClick={()=>newCard() }>NEW CARD</button>
     <h4>PLAYER :</h4>
     <p id='player-el'></p>
    
    </div>
  );
}

export default App;
