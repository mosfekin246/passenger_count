let count = 0;
let entries = document.getElementById("total");

function increment(){
    count += 1;
    document.getElementById("count").innerText= count;
}

function save(){
    // let total = " "+count +" - "; with innerText to keep the spaces
    let total = count +" - ";
    entries.textContent += total;
    count = 0;
    document.getElementById("count").innerText= count;
    // console.log(entries);
}

// let myAge = 35;
// console.log(myAge);