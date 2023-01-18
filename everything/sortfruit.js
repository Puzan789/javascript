let fruits = ["🍊", "🍌", "🍊", "🍊","🍌","🍊", "🍌", "🍊", "🍊","🍌","🍊","🍌","🍊", "🍌", "🍊", "🍊","🍌"];

function sort(){
    for(i=0;i<fruits.length;i++)
    {
        if (fruits[i]==="🍌")
        {
            document.getElementById("banana").textContent+="🍌"
        }
        else if (fruits[i]==="🍊"){
             document.getElementById("orange").textContent += "🍊";
        }
    }
}
sort()