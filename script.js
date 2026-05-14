// ACTIVE NAVIGATION EFFECT

const navLinks = document.querySelectorAll(".nav-links a");
const navLinksContainer = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

navToggle?.addEventListener("click", () => {
  navLinksContainer?.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
    navLinksContainer?.classList.remove("open");
  });
});

// CONTACT FORM

const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message Sent Successfully!");
});
