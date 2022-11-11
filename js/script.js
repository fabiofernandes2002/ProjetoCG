/* Chamar o canvas */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//CANVAS SIZE
const W = canvas.width, H = canvas.height;

// canvas no centro da página
// canvas.style.margin = "auto";
// canvas.style.display = "block";


// background image canvas
/* var img = new Image();
img.src = "/images/familia-limpa-a-praia-pessoas-guardam-o-lixo_277904-2198.webp";
img.onload = function () {
    ctx.drawImage(img, 0, 0, W, H);
} */

// array the objects, class
let images = {}
// draw a image
let img = new Image();
img.src = "/images/plastic-bag.png";
img.onload = function () {
    ctx.drawImage(img, 0, H/2, 50, 50); 
}

// imagem do panda
let imgResort = new Image();
imgResort.src = "/images/beach-ball.png";
imgResort.onload = function () {
    ctx.drawImage(imgResort, 0, H/2, 50, 50);
}

// move image to left
let x = 0; // posição inicial
let y = H/2 +50; // posição inicial
let dx = 1; // velocidade
let dy = 0; // velocidade inicial
function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, x, y, 50, 50); 
    
    x += dx; // incrementa a posição
    y += dy; // incrementa a posição

    // se a posição for maior que a largura do canvas
    if (x > W) {
        x = 0;
    }
}


// função que renderiza o canvas
function render() {
    ctx.clearRect(0, 0, W, H);
    
    // draw a image
    draw();

    ctx.drawImage(imgResort, 0, H/2, 200, 200);
    
    requestAnimationFrame(render);
}
render();


// função que tira o scroll da página
// window.addEventListener("scroll", function () {
//     window.scrollTo(0, 0);
// });

// função que remoove a barra de scroll do navegador
window.addEventListener("load", function () {
    document.body.style.overflow = "hidden";
});




























