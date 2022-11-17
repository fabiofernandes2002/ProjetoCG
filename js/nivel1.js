// import minha classe de jogo
//import Game from '/game.js';


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

// largura e altura do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// criar uma nova instância do jogo
//let game = new Game();


// função que remoove a barra de scroll do navegador
window.addEventListener("load", function () {
    document.body.style.overflow = "hidden";
});

//CANVAS SIZE
const W = canvas.width, H = canvas.height;

let images = {};
let totalResources = 6;
let numResourcesLoaded = 0;
let fps = 15; 

loadImage('saco_plastico');
loadImage('saco_papel');
loadImage('garrafa');
loadImage('garrafa_agua');
loadImage('copo');
loadImage('beach-ball');
loadImage('ecoponto_azul');
loadImage('ecoponto_amarelo');
loadImage('ecoponto_verde');

function loadImage(name) {
    images[name] = new Image();
    images[name].src = "/images/" + name + ".png";
    images[name].onload = function () {
        resourceLoaded(); 
    }
    
}

function resourceLoaded() { 
    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {
        setInterval(render, 3000 / fps);
    }
}

// imagem da bola de praia onde vai esconder os lixos
let imgBall = new Image();
imgBall.src = "/images/beach-ball.png";
imgBall.onload = function () {
    ctx.drawImage(imgBall, 0, 500, 200, 200);
}


let x = 0; // posição inicial
let y = 0; 
let speed = 0.5; // velocidade de movimento

// criar uma classe lixos e com proprideades diferentes
class Lixo {
    constructor(x, y, width, height, src, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
        this.speed = speed;
    }

    draw() {
        ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
    }

    update() {
        this.x += this.speed;
        this.draw();
    }

}


// função de animação dos lixos para o centro do canvas
function animate() {

    ctx.drawImage(images['saco_plastico'], x, H/2 + 250, 50, 50,);
    ctx.drawImage(images['saco_papel'], x + 50, H/2 + 250, 50, 50);
    ctx.drawImage(images['garrafa'], x + 100, H/2 + 250, 50, 50);
    ctx.drawImage(images['garrafa_agua'], x + 150, H/2 + 250, 50, 50);
    ctx.drawImage(images['copo'], x + 200, H/2 + 250, 50, 50);
    ctx.drawImage(images['beach-ball'], x + 250, H/2 + 250, 50, 50);

    /* x = x + 1;
    if (x > W) {
        x = 0;
    } */

    /* if (x < W/2) {
        x = x + 1;
    } */

    // velocidade de movimento lentamente ate ao meio do canvas
    if (x < W/3) {
        x = x + speed;
    }

}

// adicionar imagens dos contentores de lixos no canvas
function addContainers() {

    ctx.drawImage(images['ecoponto_azul'], 300, 200, 200, 200);
    ctx.drawImage(images['ecoponto_amarelo'], 550, 200, 200, 200);
    ctx.drawImage(images['ecoponto_verde'], 800, 200, 200, 200);
}

// adicionar a pontução do jogador no canvas
function addScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Pontos: 0", 70, 50);
}

// adicionar nível do jogador no canvas
function addLevel() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Nível: 1", 1200, 50);
}

// adicionar o botão de sair do jogo no canvas
function addExitButton() {
    
    // draw a rectangle and button text on it
    ctx.fillStyle = "white";
    ctx.fillRect(1200, 70, 100, 50);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Sair", 1220, 105);

    // border radius for the rectangle
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.strokeRect(1200, 70, 100, 50);

    // add event listener to the button
    canvas.addEventListener("click", function (e) {
        if (e.pageX >= 1200 && e.pageX <= 1300 && e.pageY >= 70 && e.pageY <= 120) { // if the click is inside the rectangle
            window.location.href = "../html/index.html";
        }
    });
}

// adicionar o botão de sair do jogo no canvas com a função de sai 

// adicionar tempo no canvas
function addTime() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText('90s', 120, 110);
}


// imagem do cronometro
let imgTimer = new Image();
imgTimer.src = "/images/cronometro.png";
imgTimer.onload = function () {
    ctx.drawImage(imgTimer, 70, 70, 50, 50);
}



// render minhas imagens em canvas
function render() {
    
    ctx.clearRect(0, 0, W, H);
    


    /* ctx.drawImage(images['saco_plastico'], x, y, 50, 50);
    ctx.drawImage(images['saco_papel'], x + 50, y, 50, 50);
    ctx.drawImage(images['garrafa'], x + 100, y, 50, 50);
    ctx.drawImage(images['garrafa_agua'], x + 150, y, 50, 50);
    ctx.drawImage(images['copo'], x + 200, y, 50, 50);
    ctx.drawImage(images['beach-ball'], x + 250, y, 50, 50); */
    addContainers();
    animate();
    

    // chamar minha imagem da bola de praia
    ctx.drawImage(imgBall, 0, 500, 200, 200);

    // chamar a imagem do cronometro
    ctx.drawImage(imgTimer, 70, 70, 50, 50);

    addScore();
    addLevel();
    addTime();
    addExitButton();

    requestAnimationFrame(render);

}









