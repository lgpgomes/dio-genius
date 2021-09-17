let order = [];
let clickedorder = [];
let score = 0;

//0 == verde
//1 == vermelho 
//2 == amarelo 
//3 == azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number*500;
    setTimeout(() => {
        element.classList.add('selected');

    }, number-250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os botao clicados sao os mesmos gerados
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível.`);
        nextLevel();
    }
}

//funcao para clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna cor
let createColorElement = (color) => {
    if  (color == 0){
        return green;
    }
    else if (color == 1) {
        return red;
    }
    else if (color == 2) {
        return yellow;
    } 
    else {
        return blue;
    }
}

//funcao para prox nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu!\n`);
    order = [];
    clickedOrder = [];
    playGame();
}


//funcao inicio do jogo
let playGame = () => {
    alert('Bem-vindo ao genius! Iniciando novo jogo.');
    score = 0;
    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();