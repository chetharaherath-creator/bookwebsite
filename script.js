// ===================== AUTHOR OF THE DAY =====================

let authors = [
  "Jane Austen",
  "George Orwell",
  "Agatha Christie",
  "J.K. Rowling",
  "Yuval Noah Harari",
  "Colleen Hoover",
  "Paulo Coelho"
];

let today = new Date().getDay();
let authorBox = document.getElementById("author-of-day");

if (authorBox) {
  authorBox.textContent = "Author of the Day: " + authors[today];
}

// ===================== AUTO ROTATING QUOTES =====================

let quotes = [
  "Reading is dreaming with open eyes.",
  "Books are a uniquely portable magic.",
  "A room without books is like a body without a soul.",
  "One book can change your whole life."
];

let quoteIndex = 0;

function showQuote() {
  let quoteElement = document.getElementById("rotating-quote");
  if (!quoteElement) return;

  quoteElement.textContent = quotes[quoteIndex];

  quoteIndex++;
  if (quoteIndex >= quotes.length) {
    quoteIndex = 0;
  }
}

showQuote();
setInterval(showQuote, 4000);

//  HAMBURGER MENU 

let menuButton = document.querySelector(".nav-toggle");
let menuLinks = document.querySelector(".nav-links");

if (menuButton && menuLinks) {
  menuButton.addEventListener("click", function () {
    menuLinks.classList.toggle("nav-open");
  });
}

// ===================== NEWSLETTER + localStorage =====================

let form = document.querySelector(".newsletter-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let emailInput = document.getElementById("newsletter-email");
    let consentCheckbox = document.getElementById("newsletter-consent");

    let email = emailInput.value.trim();
    let consent = consentCheckbox.checked;

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    if (!consent) {
      alert("Please tick the consent box.");
      return;
    }

    let saved = localStorage.getItem("newsletterList");
    let list = saved ? JSON.parse(saved) : [];

    list.push(email);

    localStorage.setItem("newsletterList", JSON.stringify(list));

    alert("Thank you for subscribing!");
    form.reset();
  });
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
