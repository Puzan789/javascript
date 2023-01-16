count =0

function increment(){
    count+=1
    document.getElementById("count").innerText=count
}

function save() {
    countstr=count + " -"
    document.getElementById("p-el").textContent+=countstr
    count=0
    document.getElementById("count").textContent =count

}