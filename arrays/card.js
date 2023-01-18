let pla = {
  playername: "person",
  playercash: 1456
};
let cards = [];
let sum = 0;
document.querySelector(".summ").textContent = "sum:" + sum;

let hasblackjack = false;
let ifalive = true;
let mesage = "";

document.querySelector("#cash").textContent +=
  pla.playername + ": " + pla.playercash + "$";
function getrandomcard() {
  p = Math.floor(Math.random() * 13) + 1;
  if (p === 1) {
    return 11;
  } else if (p === 11 || p === 12 || p === 13) return 10;
  else return p;
}

function startgame() {
  let firstcard = getrandomcard();
  let secondcard = getrandomcard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  document.querySelector(".summ").textContent = "sum:" + sum;
  rendergame();
}
function rendergame() {
  document.getElementById("card").textContent = "Card:";
  for (let i = 0; i < cards.length; i++) {
    document.getElementById("card").textContent += " " + cards[i];
  }

  if (sum <= 20) {
    message = "Do you wanna draw a new card";
    document.getElementById("message").textContent = message;
    ifalive=true
  } else if (sum == 21) {
    message = "Youve got a black jack";
    document.getElementById("message").textContent = message;
    hasblackjack = true;
  } else {
    message = " motherfucker you losed all your fuckinn money hahah";
    document.getElementById("message").textContent = message;
    ifalive = false;
  }
}
function newcard() {
  if (ifalive == true) {

    card = getrandomcard();
    cards.push(card);
    sum += card;
    document.querySelector(".summ").textContent = "sum :" + sum;
    rendergame();
  }
  else{
    console.log("card already")
  }
}
