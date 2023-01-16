let firstcard = 10;
let secondcard = 30;
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
document.querySelector(".summ").textContent = "sum:" + sum;

let hasblackjack = false;
let ifalive = true;
let mesage = "";
function startgame() {
  rendergame();
}
function rendergame() {
  document.getElementById("card").textContent =
    "card:" + cards[0] + " " + cards[1];
  if (sum <= 20) {
    message = "Do you wanna draw a new card";
    document.getElementById("message").textContent = message;
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
  card = 9;
  sum += card;
  document.querySelector(".summ").textContent = "sum :" + sum;
  rendergame();
}
