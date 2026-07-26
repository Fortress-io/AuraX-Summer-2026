import "./style.css";

import createNav from "./nav";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import createFooter from "./footer";

const content = document.querySelector("#content");

const { nav, homeBtn, menuBtn, contactBtn } = createNav();

content.appendChild(nav);

const pageContent = document.createElement("div");
content.appendChild(pageContent);

function displayPage(page) {
  pageContent.replaceChildren(page);

  const exploreBtn = document.querySelector("#explore-menu-btn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      displayPage(loadMenu());
      setActive(menuBtn);
    });
  }
}

displayPage(loadHome());
setActive(homeBtn);

homeBtn.addEventListener("click", () => displayPage(loadHome()));
menuBtn.addEventListener("click", () => displayPage(loadMenu()));
contactBtn.addEventListener("click", () => displayPage(loadContact()));

content.appendChild(createFooter());
function setActive(button) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

homeBtn.addEventListener("click", () => {
  displayPage(loadHome());
  setActive(homeBtn);
});

menuBtn.addEventListener("click", () => {
  displayPage(loadMenu());
  setActive(menuBtn);
});

contactBtn.addEventListener("click", () => {
  displayPage(loadContact());
  setActive(contactBtn);
});