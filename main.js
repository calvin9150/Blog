"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
    console.log(window.scrollY);
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

const homeBtn = document.querySelector("#homeBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const skillsBtn = document.querySelector("#skillsBtn");
const myworkBtn = document.querySelector("#myworkBtn");
const introduceBtn = document.querySelector("#introduceBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

aboutBtn.addEventListener("click", () => {
  window.scrollTo(0, 600);
});

skillsBtn.addEventListener("click", () => {
  window.scrollTo(0, 1325);
});

myworkBtn.addEventListener("click", () => {
  window.scrollTo(0, 1950);
});

introduceBtn.addEventListener("click", () => {
  window.scrollTo(0, 2540);
});

contactBtn.addEventListener("click", () => {
  window.scrollTo(0, 2897);
});
