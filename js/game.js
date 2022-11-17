export default class Game {
    constructor(points, level, time) {
        this.points = points;
        this.level = level;
        this.time = time;

    }

    // função que inicia o nível do jogo
    startLevel() {
        let level = 1; // define nível
        localStorage.setItem("level", level); // guarda nível
    }

    // função que inicia o tempo do jogo
    startTime() {
        let time = 90; // define tempo
        localStorage.setItem("time", time); // guarda tempo
    }


    // função que mostra o tempo do jogador
    showTime() {
        let time = localStorage.getItem("time"); // recupera tempo
        alert(time);
    }

    // função que mostra pontos do jogador
    showPoints() {
        let points = localStorage.getItem("points"); // recupera pontos
        alert(points);
    }

    // função que inicia os pontos do jogador
    startPoints() {
        let points = 0; // define pontos
        localStorage.setItem("points", points); // guarda pontos
    }

    // função que mostra nível do jogador
    showLevel() {
        let level = localStorage.getItem("level"); // recupera nível
        alert(level);
    }

    // função que conta o tempo do jogador
    countTime() {
        let time = localStorage.getItem("time"); // recupera tempo
        time = parseInt(time) - 1; // remove 1 segundo
        localStorage.setItem("time", time); // guarda tempo
    }




}