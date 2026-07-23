import heroImage from "./images/hero.png";

export default function loadHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const hero = document.createElement("img");
  hero.src = heroImage;
  hero.alt = "Restaurant food";
  hero.classList.add("hero");

  const title = document.createElement("h1");
  title.textContent = "The GOAT Restaurant";

  const slogan = document.createElement("h2");
  slogan.textContent = "Where Every Bite Tells a Story";

  const description = document.createElement("p");
  description.textContent =
    "Experience authentic flavors crafted with fresh ingredients, warm hospitality, and unforgettable moments.";

  const button = document.createElement("button");
  button.textContent = "Explore Menu";
  button.classList.add("hero-btn");
  button.id = "explore-menu-btn";
  home.append(hero, title, slogan, description, button);

  return home;
}
