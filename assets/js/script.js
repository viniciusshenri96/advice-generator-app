"use strict";

const adviceContent = document.querySelector(".advice__content");
const adviceText = document.querySelector(".advice__text");
const adviceID = document.querySelector(".advice__id-number");
const btnUpdate = document.querySelector(".btn__generate");

btnUpdate.addEventListener("click", async () => {
  try {
    adviceContainer.classList.remove("animation");
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    adviceText.innerText = `“${data.slip.advice}”`;
    adviceID.innerText = data.slip.id;
    adviceContent.classList.add("animation");
  } catch (err) {
    console.error(new Error("It is not an internet connection"));
  }
});

// Animated blackground with vanta.js
window.addEventListener("DOMContentLoaded", () => {
  VANTA.GLOBE({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3fff8e,
  });
});
