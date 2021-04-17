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

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  let target = event.target;
  let link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
});

const contactBtn = document.querySelector(".home__button");
contactBtn.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  }
});

// const home = document.querySelector("#home");
// document.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     home.classList.add("home--blur");
//   } else {
//     home.classList.remove("home--blur");
//   }
//   console.log("yes");
// });

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().top;
document.addEventListener("scroll", () => {
  // console.log(1 - (window.scrollY / homeHeight));
  home.style.opacity = 0.9 - window.scrollY / homeHeight;
});

const arrow = document.querySelector(".arrow");
document.addEventListener("scroll", () => {
  console.log("arrow:" + window.scrollY);
  if (window.scrollY > 200) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
});

arrow.addEventListener("click", () => {
  home.scrollIntoView();
});
