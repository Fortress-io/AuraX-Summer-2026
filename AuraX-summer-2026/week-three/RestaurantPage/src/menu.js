import burgerImage from "./images/burger.png";
import pizzaImage from "./images/pizza.png";
import pastaImage from "./images/pasta.png";
import coffeeImage from "./images/coffee.png";
import cakeImage from "./images/cake.png";
import juiceImage from "./images/juice.png";

const menuItems = [
  {
    name: "Classic Burger",
    description: "Juicy grilled beef with cheddar cheese.",
    price: "$8.99",
    image: burgerImage,
  },
  {
    name: "Margherita Pizza",
    description: "Fresh mozzarella and basil.",
    price: "$12.99",
    image: pizzaImage,
  },
  {
    name: "Creamy Pasta",
    description: "Rich Alfredo sauce with parmesan.",
    price: "$10.99",
    image: pastaImage,
  },
  {
    name: "Fresh Coffee",
    description: "Locally roasted premium coffee.",
    price: "$3.99",
    image: coffeeImage,
  },
  {
    name: "Chocolate Cake",
    description: "Moist cake with chocolate ganache.",
    price: "$5.99",
    image: cakeImage,
  },
  {
    name: "Orange Juice",
    description: "Freshly squeezed oranges.",
    price: "$4.50",
    image: juiceImage,
  },
];
export default function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const img = document.createElement("img");
    img.src = item.image;

    const title = document.createElement("h2");
    title.textContent = item.name;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    const price = document.createElement("span");
    price.textContent = item.price;

    card.append(img, title, desc, price);

    menu.appendChild(card);
  });

  return menu;
}
