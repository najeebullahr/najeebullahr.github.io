// ============================================
// 🌟 Portfolio Script – Najeeb Ullah
// ============================================
// Clean, optimized & structured JS
// ============================================

// ===============================
// 1️⃣ Smooth Scroll for Nav Links
// ===============================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===============================
// ✨ Typewriter Effect (multi-text + gradient shimmer + cursor)
// ===============================

const textArray = [
  "Advancing AI in Medical Imaging 🧠",
  "Designing Smart Healthcare Solutions 💡",
  "Building Deep Learning Models for Dental Diagnostics 🦷",
  "Turning Data into Clinical Insights 🔍",
  "Innovating AI for a Healthier Future ❤️"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 85;       // speed for typing
const erasingSpeed = 45;      // speed for erasing
const delayBetween = 2500;    // wait before erasing
const typewriter = document.getElementById("typewriter");

function type() {
  const currentText = textArray[index];
  const visibleText = currentText.substring(0, charIndex);

  typewriter.innerHTML = `<span class="gradient-text">${visibleText}</span><span class="cursor">|</span>`;

  if (charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  const currentText = textArray[index];
  const visibleText = currentText.substring(0, charIndex);

  typewriter.innerHTML = `<span class="gradient-text">${visibleText}</span><span class="cursor">|</span>`;

  if (charIndex > 0) {
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, typingSpeed + 200);
  }
}

document.addEventListener("DOMContentLoaded", type);


// ===============================
// 3️⃣ Fade-in & Scroll Reveal Animations
// ===============================
const fadeSections = document.querySelectorAll(
  "section, .edu-card, .prof-card, .project-card, .skill-category, .certificates li"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(el => {
  el.classList.add("fade-section");
  revealObserver.observe(el);
});

// ===============================
// 4️⃣ Theme Toggle with Memory
// ===============================
const toggleButton = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  toggleButton.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ===============================
// 5️⃣ Navbar Scroll Behavior & Active Highlight
// ===============================
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  // Sticky navbar effect
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active section highlight
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===============================
// 6️⃣ Professor Progress Bars
// ===============================
const progressBars = document.querySelectorAll(".progress");
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const value = bar.getAttribute("data-progress");
      bar.style.width = value;
      bar.classList.add("filled");
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.4 });

progressBars.forEach(bar => {
  bar.style.width = "0%";
  progressObserver.observe(bar);
});

// ===============================
// 7️⃣ Modal Logic for Project Details
// ===============================
const modals = document.querySelectorAll(".modal");
const readMoreBtns = document.querySelectorAll(".read-more");
const closeBtns = document.querySelectorAll(".close-btn");

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    modals[index].style.display = "flex";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// ===============================
// 8️⃣ Modal Image Carousel
// ===============================
document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll("img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => img.classList.toggle("active", i === index));
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
  });
});

// ===============================
// 9️⃣ Back-to-Top Button
// ===============================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY <= 400) backToTop.style.display = "none";
    }, 300);
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// 🔟 Mobile Menu Toggle
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("open");
  });
});
