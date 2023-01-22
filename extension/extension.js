let mylead = ["www.pepe.com", "www.lpepe.com", "www.apepe.com"];
// let inputEl =document.getElementById("inputbtn")
const ipl = document.getElementById("ull");

inputbtn.addEventListener("click", function () {
  cp = document.getElementById("input-el").value;
  mylead.push(cp);
  console.log(mylead);
});
console.log(mylead);

for (let i = 0; i < mylead.length; i++) {
  ipl.innerHTML +='<li>'+ mylead[i] + "" +"</li>";
}
// }
