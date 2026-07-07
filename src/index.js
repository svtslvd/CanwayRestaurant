import "./style.css";
import {loadContentHomePage, loadContentMenuPage, loadContentAboutPage} from "./loader.js";
import {createRandomBoard, updateBoard} from "./ConwayGameLogic.js";
import {renderLife} from "./renderGame.js";

loadContentHomePage();

const HomeBtn = document.getElementById("HomeBtn");
HomeBtn.classList.add("SelectedBtn");
HomeBtn.addEventListener("click", ()=>{
    loadContentHomePage();
    const currentAcrive = document.querySelector(".SelectedBtn");
    if (currentAcrive){
        currentAcrive.classList.remove("SelectedBtn")
    }
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
    AboutBtn.classList.add("SelectedBtn");
});

let lastRenderTime = 0;
const FPS = 2;
const renderInterval = 1000 / FPS; 

const ind = 0.3;
const rows = 100;
const cols = 100;
let gameBoard = createRandomBoard(0.3,rows,cols);


function gameLoop(currentTime) {
    requestAnimationFrame(gameLoop);

    const timeSinceLastRender = currentTime - lastRenderTime;

    if (timeSinceLastRender < renderInterval) return;

    lastRenderTime = currentTime;

    gameBoard = updateBoard(gameBoard,rows,cols);
    renderLife(gameBoard);

    console.log("frame update"); 
}

requestAnimationFrame(gameLoop);