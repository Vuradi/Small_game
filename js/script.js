'use strict'

const btnStart = document.querySelector('#start');
const gameField = document.querySelector('#game');
let time = document.querySelector('#time');

let score = 0;
let isGameStarted = false;

btnStart.addEventListener('click', startGame);
gameField.addEventListener('click', handlerBoxClick);

function startGame() {
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

function endGame() {
    isGameStarted = false;
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