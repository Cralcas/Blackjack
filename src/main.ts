import "./style.css";

let player: { name: string; chips: number } = {
  name: "Player",
  chips: 200,
};

let cards: number[] = [4, 2];
let sum: number = 0;
let message: string = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

if (playerEl !== null) {
  playerEl.innerText = player.name + ": $" + player.chips;
}

function renderGame() {
  if (cardsEl !== null) {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " ";
    }
  } else {
    console.error("ID 'cards-el' not found");
  }

  if (sumEl !== null) {
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
      message = "Do you want to draw a new card?";
    } else if (sum === 21) {
      message = "You've got Blackjack!";
    } else {
      message = "You're out of the game!";
    }

    if (messageEl !== null) {
      messageEl.textContent = message;
    } else {
      console.error("ID 'message-el' not found");
    }
  } else {
    console.error("ID 'sum-el' not found");
  }
}

renderGame();
