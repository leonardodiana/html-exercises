let img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
let walkForwards = true;
function catWalk() {
  let currentLeft = parseInt(img.style.left);
  
  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  
  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);
 