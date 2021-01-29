"use strict";

const divs = document.querySelectorAll(".square");
const button = document.querySelector("#submit");
button.classList.add("disabled");

let selectedSquares = [];

const genRandom = (list) => {
    return Math.floor(Math.random() * list.length);
}

divs.forEach(div => {
    let isTeal = false;
    div.addEventListener("click", () => {
        button.classList.remove("disabled");
        if (!isTeal) {
            div.classList.add("selected");
            isTeal = true;
            selectedSquares.push(div);
            console.log(selectedSquares);
        } else {
            div.classList.remove("selected");
            isTeal = false;
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
        selectedSquares.splice(randomSquareIndex, 1);
    } else {
        button.classList.add("disabled");
        console.log("trying to add");
    }
});