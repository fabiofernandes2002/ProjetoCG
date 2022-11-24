//import minha classe de jogo
//import Game from '/game.js';


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext("2d");

const modalGameOver = document.querySelector('#modalGameOver');
const modalPassarNivel = document.querySelector('#modalPassarNivel');
const btnRepetirJogo = document.querySelector('#btnRepetirJogo'); 
const btnPassarNivel = document.querySelector('#btnPassarNivel');

// largura e altura do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// criar uma nova instância do jogo
//let game = new Game();

btnPassarNivel.addEventListener('click', function() {
    window.location.href = "../html/nivel3.html";
});

// clicar no botão de reiniciar o jogo
btnRepetirJogo.addEventListener("click", function() {
    window.location.href = "../html/nivel2.html";
});



// função que remoove a barra de scroll do navegador
window.addEventListener("load", function () {
    document.body.style.overflow = "hidden";
});

//CANVAS SIZE
const W = canvas.width, H = canvas.height;

canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmousemove = mouseMove;

let images = {};
let totalResources = 6;
let numResourcesLoaded = 0;
let fps = 15;

let score = 0;
let showLevel = 2;
let time = 120;
let lives = 3;

// desenhar uma passadeira onde passa o lixo para o centro do canvas
function drawPassadeira() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(170, H/2 + 220, 1100, 100);

    // desenhar varios retangulos na passadeira para dar a ilusão de movimento
    ctx.fillStyle = "#000000";
    ctx.fillRect(150, H/2 + 230, 25, 80);
    ctx.fillRect(200, H/2 + 230, 25, 80);
    ctx.fillRect(250, H/2 + 230, 25, 80);
    ctx.fillRect(300, H/2 + 230, 25, 80);
    ctx.fillRect(350, H/2 + 230, 25, 80);
    ctx.fillRect(400, H/2 + 230, 25, 80);
    ctx.fillRect(450, H/2 + 230, 25, 80);
    ctx.fillRect(500, H/2 + 230, 25, 80);
    ctx.fillRect(550, H/2 + 230, 25, 80);
    ctx.fillRect(600, H/2 + 230, 25, 80);
    ctx.fillRect(650, H/2 + 230, 25, 80);
    ctx.fillRect(700, H/2 + 230, 25, 80);
    ctx.fillRect(750, H/2 + 230, 25, 80);
    ctx.fillRect(800, H/2 + 230, 25, 80);
    ctx.fillRect(850, H/2 + 230, 25, 80);
    ctx.fillRect(900, H/2 + 230, 25, 80);
    ctx.fillRect(950, H/2 + 230, 25, 80);
    ctx.fillRect(1000, H/2 + 230, 25, 80);
    ctx.fillRect(1050, H/2 + 230, 25, 80);
    ctx.fillRect(1100, H/2 + 230, 25, 80);
    ctx.fillRect(1150, H/2 + 230, 25, 80);
    ctx.fillRect(1200, H/2 + 230, 25, 80);
}

// se o nome do lixo terminar em B, então é para o ecoponto azul (Blue), G = ecoponto verde (Green) e Y = ecoponto amarelo (Yellow)
let nomes_lixos = ['saco_plasticoY','compostO', 'saco_papelB','accumulatorP', 'garrafaY', 'bananaO','garrafa_aguaY', 'batteryP','copoG', 'paperB', 'stinkO', ];
const nr_lixos = nomes_lixos.length;
let nomes_ecopontos = ['ecoponto_azul', 'ecoponto_amarelo', 'ecoponto_verde', 'ecoponto_castanho', 'ecoponto_pilhao'];
for (const ecoponto of nomes_ecopontos) {
    loadImage(ecoponto, false); // false porque não é um lixo
}


for (const nome of nomes_lixos) {
    loadImage(nome, true); // true porque é um lixo
}


function loadImage(nome, e_nome_lixo) {
    images[nome] = new Image();
    e_nome_lixo ? images[nome].src = "/images/" + nome.substring(0, nome.length - 1) + ".png": images[nome].src = "/images/" + nome + ".png"; // se for um lixo, então o nome do ficheiro é o nome do lixo sem a letra final (B, G ou Y)
    images[nome].onload = function () {
        resourceLoaded(); 
    }
    
}

function resourceLoaded() { 
    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {
        //setInterval(render, 3000 / fps);ç
        render()
    }
}

// imagem da bola de praia onde vai esconder os lixos
let imgBall = new Image();
imgBall.src = "/images/beach-ball.png";
imgBall.onload = function () {
    ctx.drawImage(imgBall, 0, 500, 200, 200);
}

// duplicar a imagem da bola de praia
function drawBall() {
    ctx.drawImage(imgBall, 1200, 500, 200, 200);
}



let y = 0; 
let speed = 5; // velocidade de movimento
// criar uma classe lixos e com proprideades diferentes
class Lixo {
    constructor(src, x, y, width, height, stop) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
        this.stop = stop;
        // this.indice = indice;
        // this.tipo = type;
        
    }

    draw() {
        ctx.drawImage(this.src, this.x, this.y, this.width, this.height);
    }

    // função que faz o lixo mover ate o meio do canvas e parar
    move() {
       
        // if (this.x < W/3 + 150 + this.l) {
        //     this.x += this.speed;
        // }
        // else
        //     mover_proxima_imagem = true;

        // mover o lixo ate sair do canvas e depois mover o proximo lixo
        if(this.stop == false)
            this.x = xGlobal
        

    }

}

// class ecoponto
class Ecoponto {
    constructor(x, y, width, height,type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
    }
    
    // draw the ecoponto
    draw() {
        ctx.drawImage(images[this.type], this.x, this.y, this.width, this.height);
    }
}

// nova instacia da classe ecoponto
let ecoponto_azul = new Ecoponto(200, 200, 200, 200, 'ecoponto_azul');
let ecoponto_amarelo = new Ecoponto(400, 200, 200, 200, 'ecoponto_amarelo');
let ecoponto_verde = new Ecoponto(600, 200, 200, 200, 'ecoponto_verde');
let ecoponto_castanho = new Ecoponto(800, 200, 200, 200, 'ecoponto_castanho');
let ecoponto_pilhao = new Ecoponto(1000, 200, 200, 200, 'ecoponto_pilhao');

// função que desenha os ecopontos no canvas
function drawEcopontos() {
    ecoponto_azul.draw();
    ecoponto_amarelo.draw();
    ecoponto_verde.draw();
    ecoponto_castanho.draw();
    ecoponto_pilhao.draw();
}



const l = 50 
for (const nome_lixo of nomes_lixos) {

    images[nome_lixo].lixo = new Lixo(images[nome_lixo], l, H/2+ 250, 50, 50, false); // criar uma nova instância da classe lixo
}

let indice_x = nomes_lixos.length -1 // indice do array de imagens
let xGlobal = l;
// função de animação dos lixos para o centro do canvas
function animate() {
    for (const nome_lixo of nomes_lixos) {
        images[nome_lixo].lixo.draw(); 
    }
    if (xGlobal < W + l) { // se a posição do lixo for menor que a largura do canvas
        xGlobal += speed; // mover o lixo para a direita
        
    }
    else if (indice_x > 0) { // se o lixo estiver no centro do canvas e o indice for maior que 0
        if (images[nomes_lixos[indice_x]] != undefined) {
            if (images[nomes_lixos[indice_x]].lixo.stop == false){
                delete images[nomes_lixos[indice_x]]; // apagar a imagem do lixo
                nomes_lixos.splice(indice_x, 1); // apagar o nome do lixo do array nomes_lixos
                nr_lixos_eliminados++;
            }
           
        }
        
        indice_x--; // decrementa o indice
        xGlobal = l;
        
    }
    if (images[nomes_lixos[indice_x]] != undefined) { 
        images[nomes_lixos[indice_x]].lixo.move(); 
    }   
    

    // console.log(images[nomes_lixos[indice_x]].lixo.speed)

    
}

// adicionar imagens dos contentores de lixos no canvas
// function addContainers() {

    

//     ctx.drawImage(images['ecoponto_azul'], 300, 200, 200, 200);
//     ctx.drawImage(images['ecoponto_amarelo'], 550, 200, 200, 200);
//     ctx.drawImage(images['ecoponto_verde'], 800, 200, 200, 200);
// }

// adicionar a pontução do jogador no canvas
function addScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Pontos: ${score}`, 70, 50);

}


// adicionar nível do jogador no canvas
function addLevel() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Nível: ${showLevel}` , 1200, 50);
}

// aumentar o nível do jogo na quando atingir 10 pontos e passar para o proximo nivel
function levelUp() {
    if (score == 10) {
        showLevel = 3;
        speed = 10;
    }
}


// adicionar o botão de sair do jogo no canvas
function addExitButton() {
    
    // draw a rectangle and button text on it
    ctx.fillStyle = "white";
    ctx.fillRect(1200, 70, 100, 50);
    ctx.fillStyle = "rgb(91, 34, 203)";
    ctx.font = "30px Arial";
    ctx.fillText("Sair", 1220, 105);

    // border radius for the rectangle
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(91, 34, 203)";
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
    ctx.fillStyle = "white";
    // color rgb example: ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillText(`${time}s`, 120, 110);

    
}


// draw image coração
let coracao = new Image();
coracao.src = "../images/coracao.png";
coracao.onload = function() {
    // draw three hearts
    ctx.drawImage(coracao, 220, 70, 50, 50);
    ctx.drawImage(coracao, 280, 70, 50, 50);
    ctx.drawImage(coracao, 340, 70, 50, 50);
}


// função de perder um coração quando o jogador por um lixo no contentor errado
// remove um coração do canvas quando o jogador por um lixo no ecoponto errado
function removeHeart() {
    if (lives == 2) {
        ctx.clearRect(340, 70, 50, 50);
    } else if (lives == 1) {
        ctx.clearRect(280, 70, 50, 50);
        ctx.clearRect(340, 70, 50, 50);
    } else if (lives == 0) {
        ctx.clearRect(220, 70, 50, 50);
        ctx.clearRect(280, 70, 50, 50);
        ctx.clearRect(340, 70, 50, 50);
        // chamar a modal de game over
        modalGameOver.style.display = "block";
    }
}



const timeDecrement = setInterval(function() {
    time--;
    if(time === 0) {
        clearInterval(timeDecrement);
        //alert("Acabou o tempo");
        // abrir a modal de fim de jogo
        modalGameOver.style.display = "block";

    }

}, 1000);


// imagem do cronometro
let imgTimer = new Image();
imgTimer.src = "/images/cronometro.png";
imgTimer.onload = function () {
    ctx.drawImage(imgTimer, 70, 70, 50, 50);
}

// drag and drop variables
let dragok = false; // global drag status
let startX = 0; // variável que guarda a posição inicial do eixo x
let startY = 0 ; // variárel que guarda a posição inicial do eixo y
// variavel i
let i = 0;


// function the mousedown in array the images
function mouseDown(e) {

    e.preventDefault();

    // get the mouse position
    let mx = e.pageX - canvas.offsetLeft; // posição do mouse no eixo x
    let my = e.pageY - canvas.offsetTop; // posição do mouse no eixo y

    // for loop to check if the mouse is inside the images
    for (i = 0; i < nomes_lixos.length; i++) { // loop para verificar se o mouse está dentro das imagens
        let s = images[nomes_lixos[i]].lixo; // variável que guarda a posição do lixo
        if (mx > s.x && mx < s.x + s.width && my > s.y && my < s.y + s.height) { // se o mouse estiver dentro da imagem
            //verificar se uma propriedade de um objeto existe
            if (s.stop == false) { 
                s.stop = true;
            }
            dragok = true; // set the drag status to true
            startX = mx - s.x; // set the start x position
            startY = my - s.y; // set the start y position
            return;
        }
    }
    
    // if the mouse is not inside the images
    dragok = false;

    // call the coliision function
    //collision(mx, my);
    
}


// function mouse move in array the images
function mouseMove(e) {
    e.preventDefault();

    let mx = e.pageX - canvas.offsetLeft; // posição do mouse no eixo x
    let my = e.pageY - canvas.offsetTop; // posição do mouse no eixo y

    if (dragok) { // se o drag estiver ativo
        let mx = e.pageX - canvas.offsetLeft; // posição do mouse no eixo x
        let my = e.pageY - canvas.offsetTop; // posição do mouse no eixo y
        let s = images[nomes_lixos[i]].lixo; // variável que guarda a imagem do lixo
        s.x = mx - startX; // posição do eixo x da imagem do lixo
        s.y = my - startY; // posição do eixo y da imagem do lixo
    }

    // call the coliision function
    //collision(mx, my);
    
}
    

// function mouse up in array the images
function mouseUp(e) {
    
    e.preventDefault();

    if (dragok) {
        collision();
        dragok = false;
    }
    
    // call the coliision function
    
}

// adicionar o som do lixo no ecoponto
function addSound() {
    let sound = new Audio();
    sound.src = "../sounds/lixo_no_ecoponto.mp3";
    sound.play();
}

let nr_lixos_eliminados = 0
// colisão lixos e os ecopontos
function collision() {
    let s = images[nomes_lixos[i]].lixo; // variável que guarda a imagem do lixo
    let mx = s.x; // posição do eixo x da imagem do lixo
    let my = s.y; // posição do eixo y da imagem do lixo
    // let width = s.width; // largura da imagem do lixo   
    // let height = s.height; // altura da imagem do lixo    

    // colisão com o ecoponto azul e se o lixo for papel adicionar 10 pontos
    let ecoponto_azul_X = 200;
    let ecoponto_azul_Y = 200;
    let ecoponto_azul_width = 200;
    let ecoponto_azul_height = 200;
    
    if (mx > ecoponto_azul_X && mx < ecoponto_azul_X + ecoponto_azul_width && my > ecoponto_azul_Y && my < ecoponto_azul_Y + ecoponto_azul_height) {
        nr_lixos_eliminados++; // incrementar o número de lixos eliminados
        if(nomes_lixos[i].slice(-1) == "B") {
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos
            score++;
        }else{
            if (score > 0) {
                score--;
            }
            lives--;
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos
                   
        }
    }

    // colisão com o ecoponto amarelo e se o lixo for plastico adicionar 10 pontos
    let ecoponto_amarelo_X = 400;
    let ecoponto_amarelo_Y = 200;
    let ecoponto_amarelo_width = 200;
    let ecoponto_amarelo_height = 200;

    if (mx > ecoponto_amarelo_X && mx < ecoponto_amarelo_X + ecoponto_amarelo_width && my > ecoponto_amarelo_Y && my < ecoponto_amarelo_Y + ecoponto_amarelo_height) {
        if(nomes_lixos[i].slice(-1) == "Y") {
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nr_lixos_eliminados++; // incrementar o número de lixos eliminados

            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos

            score++;
        }else{
            if (score > 0) {
                score--;
            }
            lives--;
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos
        }
    }

    // colisão com o ecoponto verde e se o lixo for vidro adicionar 10 pontos
    let ecoponto_verde_X = 600;
    let ecoponto_verde_Y = 200;
    let ecoponto_verde_width = 200;
    let ecoponto_verde_height = 200;
    if (mx > ecoponto_verde_X && mx < ecoponto_verde_X + ecoponto_verde_width && my > ecoponto_verde_Y && my < ecoponto_verde_Y + ecoponto_verde_height) {
        if(nomes_lixos[i].slice(-1) == "G") {
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nr_lixos_eliminados++; // incrementar o número de lixos eliminados

            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos

            score++;
        }else{
            if (score > 0) {
                score--;
            }
            lives--;
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos
        }
    }

    // colisão com o ecoponto castanho e se o lixo for organico adicionar 10 pontos
    let ecoponto_castanho_X = 800;
    let ecoponto_castanho_Y = 200;
    let ecoponto_castanho_width = 200;
    let ecoponto_castanho_height = 200;
    if (mx > ecoponto_castanho_X && mx < ecoponto_castanho_X + ecoponto_castanho_width && my > ecoponto_castanho_Y && my < ecoponto_castanho_Y + ecoponto_castanho_height) {
        if(nomes_lixos[i].slice(-1) == "O") {
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nr_lixos_eliminados++; // incrementar o número de lixos eliminados
           

            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos

            score++;
        }else{
            if (score > 0) {
                score--;
            }
            lives--;
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos
        }
    }

    // colisão com o ecoponto pilhao e se o lixo for bateria adicionar 10 pontos
    let ecoponto_pilhao_X = 1000;
    let ecoponto_pilhao_Y = 200;
    let ecoponto_pilhao_width = 200;
    let ecoponto_pilhao_height = 200;
    if (mx > ecoponto_pilhao_X && mx < ecoponto_pilhao_X + ecoponto_pilhao_width && my > ecoponto_pilhao_Y && my < ecoponto_pilhao_Y + ecoponto_pilhao_height) {
        if(nomes_lixos[i].slice(-1) == "P") {
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nr_lixos_eliminados++; // incrementar o número de lixos eliminados

            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos

            score++;
        }else{
            if (score > 0) {
                score--;
            }
            lives--;
            delete images[nomes_lixos[i]]; // apagar a imagem do lixo
            nomes_lixos.splice(i, 1); // apagar o nome do lixo do array nomes_lixos
        }
    }
    console.log(nomes_lixos); 



}



// abrir a modal de game over quando o tempo acabar
function gameOver() {
    if(time === 0) {
        if(score >= 10)
            modalPassarNivel.style.display = "block";
        else
            modalGameOver.style.display = "block";
    }
}


let xCoracao = 220;
// render minhas imagens em canvas
function render() {
    
    ctx.clearRect(0, 0, W, H);

    drawPassadeira();
    

    drawEcopontos();
    animate();

    // images the life 
    ctx.drawImage(coracao, 220, 70, 50, 50);
    ctx.drawImage(coracao, 280, 70, 50, 50);
    ctx.drawImage(coracao, 340, 70, 50, 50);

    removeHeart(); // remover coração
    
    // for (nr_coracoes, xCoracao; nr_coracoes > 0; nr_coracoes--, xCoracao += 60) {
    //     ctx.drawImage(coracao, xCoracao, 70, 50, 50);
    // }

    // chamar minha imagem da bola de praia
    ctx.drawImage(imgBall, 0, 500, 200, 200);

    // chamar a imagem do cronometro
    ctx.drawImage(imgTimer, 70, 70, 50, 50);
    drawBall();

    addScore();
    addLevel();
    addTime();
    addExitButton();

    if (nr_lixos_eliminados == nr_lixos) {
        // abrir a modal de fim de jogo
        if(score >= 10){
            modalPassarNivel.style.display = "block";
            
        }    
        else{
            modalGameOver.style.display = "block";
        }
            
    }
    requestAnimationFrame(render);

}