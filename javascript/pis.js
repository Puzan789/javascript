count = 0;
function increment() {
  count = count + 20000000;
  document.getElementById("count").innerHTML = count;
}

function decrement() {
  count = count - 2;
  document.getElementById("count").innerHTML = count;
}
  