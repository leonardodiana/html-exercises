let setBody = document.body;
setBody.style.fontFamily = "Arial, sans-serif";

let setNickname = document.getElementById("nickname");
setNickname.textContent = "Leonardo";
let setFavorites = document.getElementById("favorites");
setFavorites.textContent = "Football";
let setHometown = document.getElementById("hometown");
setHometown.textContent = "San Salvatore m.to";

let setLi = document.getElementsByTagName("li");
let i;
for (i = 0; i < setLi.length; i++) {
    setLi.className[i]= "list-item";
}
let newImg = document.createElement('img');
newImg.src = "maxAll.png";
body.appendChild(newImg);