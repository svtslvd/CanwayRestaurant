import "./style.css";
import {loadContentHomePage, loadContentMenuPage, loadContentAboutPage} from "./loader.js";
import {createRandomBoard,createRandomBoardWithImg, updateBoard} from "./ConwayGameLogic.js";
import {renderLife} from "./renderGame.js";

import data from './images.json' with { type: 'json' };

const {burger, pizza, title, hotdog, cuptea, steak} = data;
loadContentHomePage();

const HomeBtn = document.getElementById("HomeBtn");
HomeBtn.classList.add("SelectedBtn");
HomeBtn.addEventListener("click", ()=>{
    loadContentHomePage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
    gameBoard = createRandomBoardWithImg(0.3,rows,cols,title.pixels);
    pauseTime = performance.now() + 3000;
    HomeBtn.classList.add("SelectedBtn");
});

const MenuBtn = document.getElementById("MenuBtn");
MenuBtn.addEventListener("click", ()=>{
    loadContentMenuPage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
    MenuBtn.classList.add("SelectedBtn");});

const AboutBtn = document.getElementById("AboutBtn");
AboutBtn.addEventListener("click", ()=>{
    loadContentAboutPage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
    gameBoard = createRandomBoard(0.3,rows,cols);
    AboutBtn.classList.add("SelectedBtn");
});

const container = document.getElementById('content');

container.addEventListener('click', (event) => {
    const target = event.target.closest('.Hdish');

    if (!target) return;
    const dish = target.id;
    gameBoard = createRandomBoardWithImg(0.3,rows,cols,data[dish].pixels);
    pauseTime = performance.now() + 3000;
});

let lastRenderTime = 0;
let pauseTime = 0;
const FPS = 2;
const renderInterval = 1000 / FPS; 

const ind = 0.3;
const rows = 100;
const cols = 100;
let gameBoard = createRandomBoardWithImg(0.3,rows,cols,title.pixels);
pauseTime = performance.now() + 3000;



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

requestAnimationFrame(gameLoop);