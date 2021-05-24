let btn_left = document.getElementById("btn-left");
let btn_right = document.getElementById("btn-right");
let img_album = document.getElementById("img-album");
let cont = 0;
const images = ["images/secret.jpg", "images/behind.jpg", "images/man.jpg"];

// left and right button control
btn_left.onclick = left;
btn_right.onclick = right;

// Funciones
function left(e) {
  e.preventDefault();
  cont--;
  if (cont < 0) {
    cont = images.length - 1;
  }
  img_album.srcset = images[cont];
}
function right(e) {
  e.preventDefault();
  cont++;
  if (cont > images.length - 1) {
    cont = 0;
  }
  img_album.srcset = images[cont];
}
