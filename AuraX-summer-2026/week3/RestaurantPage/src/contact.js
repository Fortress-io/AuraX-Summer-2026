export default function loadContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phone = document.createElement("p");
  phone.textContent = "📞 +251 995109144";

  const email = document.createElement("p");
  email.textContent = "📧 info@tgrestaurant.com";

  const address = document.createElement("p");
  address.textContent = "📍 Adigrat, Ethiopia";

  const hours = document.createElement("p");
  hours.textContent = "🕒 Mon - Sun : 9:00 AM - 10:00 PM";

  contact.append(title, phone, email, address, hours);

  return contact;
}
