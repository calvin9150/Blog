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
    arrow.style.pointerEvents = "auto";
  } else {
    arrow.style.opacity = 0;
    arrow.style.pointerEvents = "none";
  }
});

arrow.addEventListener("click", () => {
  home.scrollIntoView();
});

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }

  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "*" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});
