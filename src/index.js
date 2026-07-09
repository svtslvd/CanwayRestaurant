import "./style.css";
import {loadContentHomePage, loadContentMenuPage, loadContentAboutPage} from "./loader.js";
import {createRandomBoard,createRandomBoardWithImg, updateBoard} from "./ConwayGameLogic.js";
import {renderLife} from "./renderGame.js";

import data from './images.json' with { type: 'json' };

let lastRenderTime = 0;
let pauseTime = performance.now() + 3000;
const FPS = 2;
const renderInterval = 1000 / FPS; 
const ind = 0.3;
const rows = 100;
const cols = 100;
let gameBoard = createRandomBoardWithImg(0.3,rows,cols,data["title"].pixels);

function gameLoop(currentTime) {
    requestAnimationFrame(gameLoop);

    const timeSinceLastRender = currentTime - lastRenderTime;
    if (timeSinceLastRender < renderInterval) return;

    lastRenderTime = currentTime;
    if (currentTime>pauseTime){;
        gameBoard = updateBoard(gameBoard,rows,cols);
    }
    renderLife(gameBoard);

    console.log("frame update"); 
};

const container = document.getElementById('content');
const AboutBtn = document.getElementById("AboutBtn");
const MenuBtn = document.getElementById("MenuBtn");
const HomeBtn = document.getElementById("HomeBtn");
HomeBtn.classList.add("SelectedBtn");

HomeBtn.addEventListener("click", ()=>{
    loadContentHomePage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
    gameBoard = createRandomBoardWithImg(0.3,rows,cols,data["title"].pixels);
    pauseTime = performance.now() + 3000;
    HomeBtn.classList.add("SelectedBtn");
});

MenuBtn.addEventListener("click", ()=>{
    loadContentMenuPage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
    MenuBtn.classList.add("SelectedBtn");});

AboutBtn.addEventListener("click", ()=>{
    loadContentAboutPage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
    gameBoard = createRandomBoard(0.3,rows,cols);
    pauseTime = performance.now();
    AboutBtn.classList.add("SelectedBtn");
});

container.addEventListener('click', (event) => {
    const target = event.target.closest('.Hdish');

    if (!target) return;
    const dish = target.id;
    if (!data[dish]) return;
    gameBoard = createRandomBoardWithImg(0.3,rows,cols,data[dish].pixels);
    pauseTime = performance.now() + 1000;
});

loadContentHomePage();
requestAnimationFrame(gameLoop);