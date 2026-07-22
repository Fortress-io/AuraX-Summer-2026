import "./style.css";

import createNav from "./nav";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const content = document.querySelector("#content");

const { nav, homeBtn, menuBtn, contactBtn } = createNav();

content.appendChild(nav);

const pageContent = document.createElement("div");
content.appendChild(pageContent);

function displayPage(page) {
  pageContent.replaceChildren(page);
}

displayPage(loadHome());

homeBtn.addEventListener("click", () => displayPage(loadHome()));
menuBtn.addEventListener("click", () => displayPage(loadMenu()));
contactBtn.addEventListener("click", () => displayPage(loadContact()));
