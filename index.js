
let countEl=document.getElementById("countEl")
let saveEl=document.getElementById("save-el")
console.log("countEl")

let count=0
function increment(){
    count=count+1
    countEl.innerText=count
}

function save() {
    let countstr=count+" - "
    saveEl.textContent=saveEl.textContent+countstr

    countEl.textContent=0
    count=0


    console.log(count)
    alert("save")
}


