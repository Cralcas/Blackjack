import "./style.css";

let player: { name: string; chips: number } = {
  name: "Player",
  chips: 200,
};

let cards: number[] = [];
let sum: number = 0;
let message: string = "";
let hasBlackJack: boolean = false;
let possibleWin: boolean = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

if (playerEl !== null) {
  playerEl.innerText = player.name + ": $" + player.chips;
}

function startGame() {
  possibleWin = true;
  let firstCard: number = getRandomCard();
  let secondCard: number = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let randomNumber: number = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function newCard() {
  if (possibleWin && !hasBlackJack) {
    let card: number = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
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
      hasBlackJack = true;
    } else {
      message = "You're out of the game!";
      possibleWin = false;
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

document.getElementById("start-game-btn")?.addEventListener("click", startGame);
document.getElementById("new-card-btn")?.addEventListener("click", newCard);
