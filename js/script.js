'use strict'

const btnStart = document.querySelector('#start');
const gameField = document.querySelector('#game');
let score = 0;

btnStart.addEventListener('click', startGame);
gameField.addEventListener('click', handlerBoxClick);

function startGame() {
    gameField.style.backgroundColor = '#fff';
    btnStart.classList.add('hide');

    renderBox()
}

function handlerBoxClick(event) {
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