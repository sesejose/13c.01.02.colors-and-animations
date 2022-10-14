"use strict";

import { animate, timeline, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";
// import { timeline } from "motion";

let theme = localStorage.getItem("data-theme");
const checkbox = document.getElementById("switch");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  console.log("I give you dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
  console.log("I give you light");
};

if (theme === "dark") {
  changeThemeToDark();
}

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

//Animations

const prop = {
  duration: 1000, //miliseconds rather seconds
  iterations: 1, // rather than infinite
  direction: "alternate",
  easing: "ease-in-out",
  //   composite: "add",
};

const fade = [{ opacity: "0" }, { opacity: "100" }];
const up = [{ transform: "translateY(10rem)" }, { transform: "translateY(0rem)" }];
const down = [{ transform: "translateY(-10rem)" }, { transform: "translateY(0rem)" }];
const scale = [{ scale: "0%" }, { scale: "100%" }];
const left = [{ transform: "translateX(-10rem)" }, { transform: "translateX(0rem)" }];
const right = [{ transform: "translateX(10rem)" }, { transform: "translateX(0rem)" }];

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("loaded and executed function");
  const headerTitleFade = document.querySelector(".header_text h1").animate(fade, prop);
  const headerTitleLeft = document.querySelector(".header_text h1").animate(left, prop);
  const headerParFade = document.querySelector(".header_text p").animate(fade, prop);
  const headerParRight = document.querySelector(".header_text p").animate(left, prop);
  const btnUp = document.querySelector(".header_text button").animate(up, prop);
  const btnScale = document.querySelector(".header_text button").animate(scale, prop);
  const RaketUp = document.querySelector(".header_graphics svg").animate(up, prop);
  const RaketFade = document.querySelector(".header_graphics svg").animate(fade, prop);
  //   const headerGraphic = document.querySelector(".header_graphics").animate(scale, prop);
  //   headerText.finish();
}

//Motion One

//Timeline

const target = document.querySelector("main");
console.log(target);

const sequence = [
  ["article", { x: [-2000, 0] }, { delay: stagger(0.1), duration: 1, easing: [0.22, 0.03, 0.26, 1] }],
  // [".highlight div", { x: [500, 0] }, { duration: 0.1, easing: [0.22, 0.03, 0.26, 1] }],
  [".request", { opacity: [0.1, 1] }, { duration: 0.3, easing: [0.22, 0.03, 0.26, 1] }],
  [".request", { y: [300, -200] }, { duration: 0.3, easing: [0.22, 0.03, 0.26, 1] }],
]; // Sequence ends

//Simple animation

// animate(
//   "article",
//   { x: [-100, 0] },
//   {
//     delay: stagger(0.1),
//     duration: "+0.5",
//     easing: [0.22, 0.03, 0.26, 1],
//   }
// );

//  Scroll
scroll(
  timeline(sequence, { target: target, duration: 4 })
  // animate("article", { x: [-100, 0] }, { delay: stagger(0.3), duration: 0.5, easing: [0.22, 0.03, 0.26, 1] }) //animate ends
);
