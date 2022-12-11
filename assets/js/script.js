"use strict";

const adviceContent = document.querySelector(".advice__content");
const adviceText = document.querySelector(".advice__text");
const adviceID = document.querySelector(".advice__id-number");
const btnUpdate = document.querySelector(".btn__generate");

btnUpdate.addEventListener("click", async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceText.innerText = `“${data.slip.advice}”`;
    adviceID.innerText = data.slip.id;
  } catch (err) {
    console.error(new Error("It is not an internet connection"));
  }
});
