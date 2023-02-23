import logo from './logo.svg';
import './App.css';

function App() {
  let firstCard = 10;
  let secondCard = 4;
  let sum  = firstCard + secondCard;
  let hasBlackJack = false
  let message = ""
  let messageEl = document.getElementById("message-el")
  let sumEl = document.getElementById("sum")
  let cardEl =document.querySelector("#card-el")

 
  function startGame(){
    cardEl.innerHTML = "Cards: " + firstCard + " " + secondCard
    sumEl.innerHTML = "Sum" + ":" + "" + sum
   if(sum <= 20){
    message = "Do you want to draw a new card"
   }else if(sum === 21){
      message = "Whoo! you have got blackjack!"
      hasBlackJack = true
   }else{
    message = "You're out of game!"
   }

   messageEl.innerHTML = message

  }

  const newCard =()=>{
 console.log("Drawing a new card")
  }
  return ( 
    <div className="App">
     <h1>BlackJack</h1>
     <p id="message-el">
      Want to play a round
     </p>
     <p id='card-el'>Cards</p>
     <p id='sum'></p>
     <button onClick={()=>startGame()}>START GAME</button> <br />
     <button onClick={()=>newCard()}>NEW CARD</button>
    </div>
  );
}

export default App;
