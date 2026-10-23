// IMPORTANT: Replace this with the salon's WhatsApp number, including country code.
 // Example format for India: 919876543210 (digits only, no + or spaces)
const SALON_WHATSAPP_NUMBER = "910000000000";

// Replace these details before publishing this demo.
const SALON_PHONE_DISPLAY = "+91 00000 00000";
const SALON_ADDRESS = "Add your salon address here";

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("displayPhone").textContent = SALON_PHONE_DISPLAY;
document.getElementById("displayAddress").textContent = SALON_ADDRESS;

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const dateInput = document.getElementById("date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
dateInput.min = localToday;

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();

  if (SALON_WHATSAPP_NUMBER === "910000000000") {
    alert("Demo website: first open script.js and replace SALON_WHATSAPP_NUMBER with the salon's real WhatsApp number.");
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value.trim();

  const message = [
    "Hello Pooja Hair Salon! I'd like to request an appointment.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Preferred date: ${date}`,
    notes ? `Notes: ${notes}` : ""
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${SALON_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
