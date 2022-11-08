/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  document
    .getElementById("generateExcuse")
    .addEventListener("click", generateExcuse);

  function generateExcuse() {
    let excuse = " ";
    excuse = randomVal(who) + " ";
    excuse = excuse + randomVal(action) + " ";
    excuse = excuse + randomVal(what) + " ";
    excuse = excuse + randomVal(when);

    document.getElementById("Excuse").innerText = excuse;
    console.log(excuse);
  }

  function randomVal(array) {
    let num = Math.floor(Math.random() * (array.length - 1));
    return array[num];
  }
};
