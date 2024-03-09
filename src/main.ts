import "./style.css";

let player: { name: string; chips: number } = {
  name: "Player",
  chips: 200,
};

// let cards: [] = [];
// console.log(player);
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el") as HTMLElement;

playerEl.innerText = player.name + ": $" + player.chips;
