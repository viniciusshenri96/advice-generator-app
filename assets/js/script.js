"use strict";

const adviceText = document.querySelector(".advice__text");
const btnUpdate = document.querySelector(".btn__generate");

const updateAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);
  btnUpdate.addEventListener("click", function () {
    adviceText.textContent = data.slip.advice;
  });
};
const data = updateAdvice();
