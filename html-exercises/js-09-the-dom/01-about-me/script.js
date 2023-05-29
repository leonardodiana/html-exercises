let body = document.body;
body.style.fontFamily = "Arial, sans-serif";

let setNickname = document.getElementById("nickname");
setNickname.textContent = "Leonardo";
let setFavorites = document.getElementById("favorites");
setFavorites.textContent = "Football";
let setHometown = document.getElementById("hometown");
setHometown.textContent = "San Salvatore m.to";




body = document.body;
let newImg = document.createElement('img');
newImg.src = 'maxAll.jpg';
newImg.style.border = '1px solid black';
body.appendChild(newImg);
let link = document.createElement('link')
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'style.css';
let head = document.head;
head.appendChild(link);



