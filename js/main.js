// ================================
// Navigation
// ================================

const navShell = document.querySelector(".nav-shell");
const navToggle = document.querySelector(".nav-toggle");

if (navShell && navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navShell.classList.toggle("nav-open", !expanded);
  });
}

// ================================
// Demo Modal
// ================================

const modal = document.getElementById("demo-modal");
const demoForm = document.getElementById("demo-form");
const demoTriggers = document.querySelectorAll("[data-demo-trigger]");
const modalCloseTargets = document.querySelectorAll("[data-modal-close]");
const successMessage = document.querySelector(".form-success");
let previousFocus = null;

function openModal() {
  if (!modal) {
    return;
  }

  previousFocus = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const firstInput = modal.querySelector("input");
  if (firstInput) {
    firstInput.focus();
  }
}

function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (previousFocus instanceof HTMLElement) {
    previousFocus.focus();
  }
}

demoTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openModal);
});

modalCloseTargets.forEach((target) => {
  target.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeModal();
  }
});

if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (successMessage) {
      successMessage.hidden = false;
    }

    demoForm.reset();
  });
}

// ================================
// Scroll Effects
// ================================

const header = document.querySelector(".site-header");

function syncHeaderState() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

// ================================
// Micro Animations
// ================================

const animatedCards = document.querySelectorAll(".feature-card, .detail-panel, .result-card, .statement-block");

animatedCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-2px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
