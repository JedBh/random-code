"use strict";

const divs = document.querySelectorAll(".square");
const button = document.querySelector("#submit");
const reset = document.querySelector("#reset");
let divRedList = [];

button.classList.add("disabled");

let selectedSquares = [];

const genRandom = (list) => {
    return Math.floor(Math.random() * list.length);
}

divs.forEach(div => {
    div.isTeal = false;
    div.addEventListener("click", () => {
        button.classList.remove("disabled");
        if (divRedList.indexOf(div) > -1) {
            console.log("This is red")
        } else if (!div.isTeal) {
            div.classList.add("selected");
            div.isTeal = true;
            selectedSquares.push(div);
            console.log(selectedSquares);
        } else {
            div.classList.remove("selected");
            div.isTeal = false;
            let index = selectedSquares.indexOf(div);
            if (index > -1) {
                selectedSquares.splice(index, 1);
                console.log(selectedSquares);
            }
        }

        if (selectedSquares.length === 0) {
            button.classList.add("disabled");
        }
    });
});

button.addEventListener("click", () => {
    if (selectedSquares.length !== 0) {
        button.classList.remove("disabled")
        let randomSquareIndex = genRandom(selectedSquares);
        selectedSquares[randomSquareIndex].classList.add("submmited");
        divRedList.push(selectedSquares[randomSquareIndex]);
        selectedSquares.splice(randomSquareIndex, 1);
    } else {
        button.classList.add("disabled");
    }
});

reset.addEventListener("click", () => {
    divs.forEach(div => {
        div.classList.remove("selected");
        div.classList.remove("submmited");
        div.isTeal = false;
        selectedSquares = []
        button.classList.add("disabled");
        divRedList = [];
    });
});