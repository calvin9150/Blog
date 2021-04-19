"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (navbarList.classList.contains("open")) {
    navbarList.classList.remove("open");
    return;
  } else if (window.scrollY > 0) {
    navbar.classList.add("navbar--dark");
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

  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");

  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "*" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});

const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarList = document.querySelector(".navbar__menu--list");
navbarToggleBtn.addEventListener("click", () => {
  navbar.classList.add("navbar--dark");
  navbarList.classList.toggle("open");
});

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#introduces",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectNavItem(selected) {
  selectedNavItem.classList.remove("active");
  selectedNavItem = selected;
  selectedNavItem.classList.add("active");
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      // 스크롤링이 아래로 되어서 페이지가 올라옴
      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));
