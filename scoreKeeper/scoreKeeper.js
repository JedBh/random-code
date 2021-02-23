"use strict";
// outputs & inputs
const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");
const maxScore = document.querySelector("#maxScore");
const banner = document.querySelector(".banner");
const h2 = document.createElement("h2");
banner.appendChild(h2);

// buttons
const addButton1 = document.querySelector("#plusPlayer1");
const addButton2 = document.querySelector("#plusPlayer2");
const resetButton = document.querySelector("#reset");

const resetGame = () => {
    player1Score.innerHTML = "0";
    player2Score.innerHTML = "0";
    player1Score.value = 0;
    player2Score.value = 0;
    maxScore.value = 11;
    maxScore.value = Number(maxScore.value);
    maxScore.innerHTML = "11";
    addButton1.disabled = false;
    addButton2.disabled = false;
    banner.classList.remove("banner");
    banner.classList.add("banner-hidden");
    h2.innerHTML = "";
}

const disableButton = () => {
    addButton1.disabled = true;
    addButton2.disabled = true;
}

const createBanner = (player) => {
    h2.innerHTML = `${player} Won`;
    banner.classList.remove("banner-hidden");
    banner.classList.add("banner");
}

const scoreChecker = () => {
    let points = Number(maxScore.value);
    let diff = Math.abs(player1Score.value - player2Score.value);
    let scoreArr = [player1Score.value, player2Score.value];
    let maxNum = Math.max(...scoreArr);

    if (player1Score.value === points && diff >= 2) {
        createBanner("Player 1");
        disableButton();
    } else if (player2Score.value === points && diff >= 2) {
        createBanner("Player 2");
        disableButton();
    } else if (diff >= 2 && player1Score.value > player2Score.value && maxNum >= points) {
        createBanner("Player 1");
        disableButton();
    } else if (diff >= 2 && player1Score.value < player2Score.value && maxNum >= points) {
        createBanner("Player 2");
        disableButton();
    }
}

resetGame();

resetButton.addEventListener("click", resetGame);

addButton1.addEventListener("click", function () {
    player1Score.value += 1;
    player1Score.innerHTML = player1Score.value;
    scoreChecker();
});

addButton2.addEventListener("click", function () {
    player2Score.value += 1;
    player2Score.innerHTML = player2Score.value;
    scoreChecker();
});

maxScore.addEventListener("input", function () {
    console.log(maxScore.value);
});