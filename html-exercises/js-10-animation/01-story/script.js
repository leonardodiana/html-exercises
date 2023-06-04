function story(){
    let person=document.getElementById("person").value
    let adjective=document.getElementById("adjective").value
    let noun=document.getElementById("noun").value

    let story=person + " likes " + noun + " " +adjective
    let body = document.body
    let newpar= document.createElement("h5")
    newpar.textContent=story;
    body.appendChild(newpar);
}

let button = document.getElementById("gen-button");
button.addEventListener('click', story);