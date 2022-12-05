"use strict";

const adviceText = document.querySelector(".advice__text");
const adviceID = document.querySelector(".advice__id-number");
const btnUpdate = document.querySelector(".btn__generate");
console.log(adviceID);

btnUpdate.addEventListener("click", async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceText.innerText = `“${data.slip.advice}”`;
    adviceID.innerText = data.slip.id;
    console.log(adviceID.innerText);
  } catch (err) {
    console.error(new Error("It is not an internet connection"));
  }
});
