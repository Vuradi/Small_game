'use strict'

const btnStart = document.querySelector('#start');
const gameField = document.querySelector('#game');
let time = document.querySelector('#time');
let result = document.querySelector('#result')
const timeHeader = document.querySelector('#time-header');
const resultHeader = document.querySelector('#result-header')

let score = 0;
let isGameStarted = false;

btnStart.addEventListener('click', startGame);
gameField.addEventListener('click', handlerBoxClick);

function startGame() {
    score = 0;
    setGameTime();
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');
    isGameStarted = true;
    gameField.style.backgroundColor = '#fff';
    btnStart.classList.add('hide');

    let interval = setInterval(function() {
        let timer = parseFloat(time.textContent);

        if (timer <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (timer - 0.1).toFixed(1);
        }
    }, 100)

    renderBox()
}

function setGameScore() {
    result.textContent = score.toString();
}

function setGameTime() {
    const initTime = 5;
    time.textContent = initTime.toFixed(1);
}

function endGame() {
    isGameStarted = false;
    setGameScore();
    btnStart.classList.remove('hide');
    gameField.innerHTML = ''
    gameField.style.backgroundColor = '#ccc';
    timeHeader.classList.add('hide');
    resultHeader.classList.remove('hide');
}

function handlerBoxClick(event) {
    if (!isGameStarted) {
        return
    }

    if (event.target.dataset.box) {
        score++;
        renderBox();
    }
}

function renderBox() {
    gameField.innerHTML = '';
    let box = document.createElement('div');
    let boxSize = getRandom(30, 100);
    let gameSize = gameField.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;

    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = '#000';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    gameField.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}