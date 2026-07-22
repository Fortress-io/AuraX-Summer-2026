export default function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const item1 = document.createElement("p");
  item1.textContent = "🍔 Classic Burger - $8.99";

  const item2 = document.createElement("p");
  item2.textContent = "🍕 Margherita Pizza - $12.99";

  const item3 = document.createElement("p");
  item3.textContent = "🥤 Fresh Juice - $3.99";

  menu.append(heading, item1, item2, item3);

  return menu;
}
