/* função que guarda dados na localStorage */
function saveData() {
    var data = document.getElementById("data").value;
    localStorage.setItem("data", data);
}

// função que recupera dados da localStorage
function loadData() {
    var data = localStorage.getItem("data");
    document.getElementById("data").value = data;
}

// função que limpa dados da localStorage
function clearData() {
    localStorage.clear();
}

// função que remove dados da localStorage
function removeData() {
    localStorage.removeItem("data");
}

// função que mostra dados da localStorage
function showData() {
    var data = localStorage.getItem("data"); // recupera dados
    alert(data);
}

// função que atribui pontos ao jogador
function addPoints() {
    var points = localStorage.getItem("points"); // recupera pontos
    points = parseInt(points) + 1; // adiciona 1 ponto
    localStorage.setItem("points", points); // guarda pontos
}

// função que pega a sua localização
function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition); // mostra a posição         
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}



// função que mostra vidas ao jogador
function showLives() {
    var lives = localStorage.getItem("lives"); // recupera vidas
    alert(lives);
}

// função que faz navegar para a página de jogo
function play() {
    window.location.href = "game.html";
}

// função que faz nível 1
function level1() {
    window.location.href = "level1.html";
}

// função que faz nível 2
function level2() {
    window.location.href = "level2.html";
}

// função que faz nível 3
function level3() {
    window.location.href = "level3.html";
}

// função que passa o jogador de nível	
function nextLevel() {
    var level = localStorage.getItem("level"); // recupera nível
    level = parseInt(level) + 1; // adiciona 1 nível
    localStorage.setItem("level", level); // guarda nível
    window.location.href = "level" + level + ".html"; // navega para o nível
}

// função que perde vidas
function loseLife() {
    var lives = localStorage.getItem("lives"); // recupera vidas
    lives = parseInt(lives) - 1; // remove 1 vida
    localStorage.setItem("lives", lives); // guarda vidas
}

// função que mostra posição do jogador
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    alert("Latitude: " + lat + " Longitude: " + lon);
}

// função que mostra nível do jogador

function showLevel() {
    var level = localStorage.getItem("level"); // recupera nível
    alert(level);
}

// função que mostra pontos do jogador
function showPoints() {
    var points = localStorage.getItem("points"); // recupera pontos
    alert(points);
}

// função que mostra o tempo do jogador
function showTime() {
    var time = localStorage.getItem("time"); // recupera tempo
    alert(time);
}

// função que conta o tempo do jogador
function countTime() {
    var time = localStorage.getItem("time"); // recupera tempo
    time = parseInt(time) - 1; // remove 1 segundo
    localStorage.setItem("time", time); // guarda tempo
}

// função que inicia o tempo do jogo
function startTime() {
    var time = 60; // define tempo
    localStorage.setItem("time", time); // guarda tempo
}

// função que inicia o nível do jogo
function startLevel() {
    var level = 1; // define nível
    localStorage.setItem("level", level); // guarda nível
}

// função que inicia as vidas do jogador
function startLives() {
    var lives = 3; // define vidas
    localStorage.setItem("lives", lives); // guarda vidas
}

// função que faz navegar para a página de fim de jogo
function gameOver() {
    window.location.href = "gameover.html";
}

// função que faz navegar para a página de vitória
function gameWin() {
    window.location.href = "gamewin.html";
}

// função que passa o jogador de nível só se atingir 15 pontos
function nextLevel2() {
    var points = localStorage.getItem("points"); // recupera pontos
    if (points >= 15) {
        var level = localStorage.getItem("level"); // recupera nível
        level = parseInt(level) + 1; // adiciona 1 nível
        localStorage.setItem("level", level); // guarda nível
        window.location.href = "level" + level + ".html"; // navega para o nível
    } else {
        alert("You need 15 points to pass to the next level!"); // alerta

    }
}

// função que passa o jogador de nível só se atingir 30 pontos
function nextLevel3() {
    var points = localStorage.getItem("points"); // recupera pontos
    if (points >= 30) {
        var level = localStorage.getItem("level"); // recupera nível
        level = parseInt(level) + 1; // adiciona 1 nível
        localStorage.setItem("level", level); // guarda nível
        window.location.href = "level" + level + ".html"; // navega para o nível
    } else {
        alert("You need 30 points to pass to the next level!"); // alerta

    }
}



