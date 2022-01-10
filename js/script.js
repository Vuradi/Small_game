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

    box.style.height = box.style.width = '50px';
    box.style.position = 'absolute';
    box.style.backgroundColor = '#000';
    box.style.top = '50px';
    box.style.left = '70px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');

    gameField.insertAdjacentElement('afterbegin', box)
}