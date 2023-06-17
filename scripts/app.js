const gameData = [
   [0, 0, 0],
   [0, 0, 0],
   [0, 0, 0],
];


let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
 {
    name: '',
    symbol: 'X'
 },
 {
    name: '',
    symbol: 'O'
 },
];


const editPlayerBtn1 = document.getElementById('edit-player-1-name');
const editPlayerBtn2 = document.getElementById('edit-player-2-name');
const playerConfigElement = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const getCancelBtn = document.getElementById('cancelBtn');
const formElement = document.querySelector('form');
const errormsg = document.getElementById('erormsg');
const startbtn = document.getElementById('startbtn');
const gameAreaElement = document.getElementById('active-game');
const gameFieldElements = document.querySelectorAll('#game-board li')
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
const gameBoardElement = document.getElementById('game-board');

editPlayerBtn1.addEventListener("click",openPlayerConfig);
editPlayerBtn2.addEventListener("click",openPlayerConfig);

getCancelBtn.addEventListener('click',closePlayerConfig);
backdrop.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startbtn.addEventListener('click', startNewGame);

for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click',selectGameField)
}