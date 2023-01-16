let nu1=8
let nu2=2

document.getElementById("num1").textContent=nu1
document.getElementById("num2").textContent=nu2

function add(){
    sum=nu1+nu2
    document.getElementById("result").textContent="sum"+sum
}
function sub() {
  su = nu1 - nu2;
  document.getElementById("result").textContent = su
}
function mul() {
  mu = nu1 * nu2;
  document.getElementById("result").textContent = mu;
}
function div() {
  di = nu1 / nu2;
  document.getElementById("result").textContent = di;
}