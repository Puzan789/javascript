let firstcard = getrandomcard()
let secondcard = getrandomcard()
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
document.querySelector(".summ").textContent = "sum:" + sum;

let hasblackjack = false;
let ifalive = true;
let mesage = "";
function getrandomcard()
{
  return 5;
}

function startgame() {
  rendergame();
}
function rendergame() {
  document.getElementById("card").textContent ="Card:"
  for(let i=0;i<cards.length;i++){
    document.getElementById("card").textContent += " " + cards[i];
  }
  
    
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
  card = getrandomcard();
  cards.push(card)
  sum += card;

  document.querySelector(".summ").textContent = "sum :" + sum;
  rendergame();
}
