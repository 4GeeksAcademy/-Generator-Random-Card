/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pictures = ["♦", "♥", "♠", "♣"];
let numbers = [
  "K",
  "J",
  "Q",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "A"
];

window.onload = function() {
  const cardGenerator = () => {
    //suites/faces
    let randomPicture = Math.floor(Math.random() * pictures.length);
    let randomNumber = Math.floor(Math.random() * numbers.length);
    //cards parts
    let cardTop = document.querySelector(".card-top");
    let cardBottom = document.querySelector(".card-bottom");
    cardTop.innerHTML = pictures[randomPicture];
    cardBottom.innerHTML = pictures[randomPicture];
    let cardNumber = document.querySelector(".card-number");
    cardNumber.innerHTML = numbers[randomNumber];

    if (pictures[randomPicture] === "♥" || pictures[randomPicture] === "♦") {
      document.querySelectorAll(".color-change").forEach(element => {
        element.style.color = "red";
      });
    } else {
      document.querySelectorAll(".color-change").forEach(element => {
        element.style.color = "black";
      });
    }
  };
  cardGenerator();
};
