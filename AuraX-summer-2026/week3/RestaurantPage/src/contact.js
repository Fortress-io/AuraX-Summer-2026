export default function loadContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 +251 995109144";

  const email = document.createElement("p");
  email.textContent = "📧 info@dejusrestaurant.com";

  const address = document.createElement("p");
  address.textContent = "📍 Adigrat, Ethiopia";

  contact.append(heading, phone, email, address);

  return contact;
}
