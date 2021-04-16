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

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  let target = event.target;
  let link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView();
  }
});
