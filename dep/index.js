let mylead = [];
// let inputEl =document.getElementById("inputbtn")
const ipl = document.getElementById("ull");

inputbtn.addEventListener("click", function () {
  cp = document.getElementById("input-el").value;
  mylead.push(cp);
  cp = document.getElementById("input-el").value = "";

  renderleads();
});
function renderleads() {
  let listitems = "";

  for (let i = 0; i < mylead.length; i++) {
    if (mylead[i] == "") {
      null;
    } else {
      // listitems += "<li> <a href='"+mylead[i]+"' target='_blank'>" + mylead[i] +"</a> </li>";
      listitems += `
      <li class="list  mt-4" style="list-style:none;">
        <a class="text-success" target='_blank' href='${mylead[i]}'>
        ${mylead[i]}</a>
      </li>

    `;
    }
  }
  document.getElementById("ull").innerHTML = listitems;
}
