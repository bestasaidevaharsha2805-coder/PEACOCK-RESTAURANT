/* =========================================================
   PEACOCK BAR & RESTAURANT
   JAVASCRIPT
========================================================= */


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");

  const icon = menuToggle.querySelector("i");

  if (nav.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   MENU FILTER
========================================================= */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuItems = document.querySelectorAll(".menu-item");


menuTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    /* Remove active */

    menuTabs.forEach(item => {
      item.classList.remove("active");
    });

    tab.classList.add("active");


    const category = tab.dataset.category;


    menuItems.forEach(item => {

      if (
        category === "all" ||
        item.dataset.category === category
      ) {

        item.classList.remove("hidden");

      } else {

        item.classList.add("hidden");

      }

    });

  });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (event) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    const headerHeight = header.offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document.querySelectorAll("img").forEach(img => {

  img.addEventListener("error", () => {

    img.style.display = "none";

    const parent = img.parentElement;

    if (parent) {
      parent.style.background =
        "linear-gradient(135deg,#3b090f,#d77a18)";
    }

  });

});


/* =========================================================
   SMALL PARALLAX EFFECT FOR HERO
========================================================= */

const heroFood = document.querySelector(".hero-food");

window.addEventListener("mousemove", event => {

  if (!heroFood || window.innerWidth < 900) return;

  const x =
    (window.innerWidth / 2 - event.clientX) / 70;

  const y =
    (window.innerHeight / 2 - event.clientY) / 70;

  heroFood.style.transform =
    `translate(${x}px, ${y}px)`;

});


/* =========================================================
   BUTTON RIPPLE
========================================================= */

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("click", function (event) {

    const ripple = document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";

    this.style.position = "relative";
    this.style.overflow = "hidden";

    const rect = this.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    ripple.style.left =
      `${event.clientX - rect.left - size / 2}px`;

    ripple.style.top =
      `${event.clientY - rect.top - size / 2}px`;

    ripple.style.background =
      "rgba(255,255,255,0.18)";

    ripple.style.transform = "scale(0)";

    ripple.style.transition =
      "transform 0.6s ease, opacity 0.6s ease";

    this.appendChild(ripple);

    requestAnimationFrame(() => {

      ripple.style.transform = "scale(1.5)";
      ripple.style.opacity = "0";

    });

    setTimeout(() => {
      ripple.remove();
    }, 700);

  });

});


console.log(
  "Peacock Bar website loaded successfully."
);
