/* Chamar o canvas */
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// largura e altura do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//CANVAS SIZE
const W = canvas.width, H = canvas.height;

let imageArray = new Array();


//INITIALIZE OBJECTS & START ANIMATION
window.onload = () => {
    init();     //setup the array of 6 objects
    render();   //start the animation
};

// // imagem da bola de praia onde escondo o inicio da animaçõ das minhas imagens
function imageBeach() {
    let imgBall = new Image();
    imgBall.src = "/images/beach-ball.png";
    imgBall.onload = function () {
        ctx.drawImage(imgBall, 0, H/2, 50, 50);
    }
}

// função que remoove a barra de scroll do navegador
window.addEventListener("load", function () {
    document.body.style.overflow = "hidden";
});

// array the objects, class com minhas imagens
const images = [
    {src: "/images/saco_plastico.png", x: 0, y: H/2, w: 50, h: 50, speed: 1},
    {src: "/images/beach-ball.png", x: 50, y: H/2, w: 50, h: 50, speed: 1},
    {src: "/images/saco_papel.png", x: 100, y: H/2, w: 50, h: 50, speed: 1},
    {src: "/images/garrafa.png", x: 150, y: H/2, w: 50, h: 50, speed: 1},
    {src: "/images/garrafa_agua.png", x: 200, y: H/2, w: 50, h: 50, speed: 1},
    {src: "/images/copo.png", x: 250, y: H/2, w: 50, h: 50, speed: 1},
];

// class Image
class Image {
    constructor(src, x, y, w, h, speed) {
        this.src = src; // source
        this.x = x; // posição inicial
        this.y = y; // posição inicial
        this.w = w; // largura
        this.h = h; // altura
        this.speed = speed; // velocidade
    }

    // draw a image
    draw() {
        let img = new Image();
        img.src = this.src;
        img.onload = function () {
            ctx.drawImage(img, this.x, this.y, this.w, this.h, this.speed);
        }
    }

    // move image to left
    move() {
        this.x += 1; // incrementa a posição
        if (this.x > W) { // se a posição for maior que a largura do canvas
            this.x = 0; // volta para a posição inicial
        }
    }


    // drag and drop image para dentro da caixa de lixo (canvas)
    // dragAndDrop() {
    //     this.x = e.clientX - this.w/2; // posição inicial
    //     this.y = e.clientY - this.h/2; // posição inicial

    //     if (this.x > 0 && this.x < 0) { // se a posição for maior que a largura do canvas
    //         this.x = 0; // volta para a posição inicial
    //     }
    // }

    
}

// função init animação das imagens que estão no array images 
function init() {
    for (let i = 0; i < images.length; i++) {
        let img = new Image(images[i].src, images[i].x, images[i].y, images[i].w, images[i].h, images[i].speed);
        img.draw();
        img.move();
        // imageArray.push(img);

    }
}

// iterar sobre o array de imagens e desenhar cada uma delas no canvas
// for (let i = 0; i < images.length; i++) {
//     let img = new Image(images[i].src, images[i].x, images[i].y, images[i].w, images[i].h);
//     img.draw();
//     img.move();
// }


// função que renderiza o canvas
function render() {
    ctx.clearRect(0, 0, W, H); // limpa o canvas

    // chama a função imageBeach que desenha a imagem da bola de praia
    imageBeach();

    // draw my images in array
    //nit();

    imageArray.forEach((image) => {
        image.draw();
        image.move();
    });

    
    
    requestAnimationFrame(render);
}




