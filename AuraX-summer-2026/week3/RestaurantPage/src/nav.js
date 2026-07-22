export default function createNav() {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

  nav.append(homeBtn, menuBtn, contactBtn);

  return {
    nav,
    homeBtn,
    menuBtn,
    contactBtn,
  };
}
