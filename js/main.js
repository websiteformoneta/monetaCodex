// ================================
// Navigation
// ================================

const navShell = document.querySelector(".nav-shell");
const navToggle = document.querySelector(".nav-toggle");

function closeNav() {
  if (!navShell || !navToggle) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  navShell.classList.remove("nav-open");
}

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
const modalPanel = modal?.querySelector(".modal-panel") ?? null;
const demoForm = document.getElementById("demo-form");
const demoTriggers = document.querySelectorAll("[data-demo-trigger]");
const navLinks = document.querySelectorAll(".primary-nav a");
const modalCloseTargets = document.querySelectorAll("[data-modal-close]");
const successMessage = document.querySelector(".form-success");
const submitButton = demoForm?.querySelector('button[type="submit"]') ?? null;
const requiredFields = demoForm ? demoForm.querySelectorAll("[required]") : [];
let previousFocus = null;

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

function syncSubmitState() {
  if (!demoForm || !submitButton) {
    return;
  }

  submitButton.disabled = !demoForm.checkValidity();
}

function openModal() {
  if (!modal) {
    return;
  }

  closeNav();
  previousFocus = document.activeElement;
  if (successMessage) {
    successMessage.hidden = true;
  }
  syncSubmitState();
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
  if (!modal?.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
    return;
  }

  if (event.key !== "Tab" || !modalPanel) {
    return;
  }

  const focusableElements = modalPanel.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) {
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

if (demoForm) {
  requiredFields.forEach((field) => {
    field.addEventListener("input", syncSubmitState);
    field.addEventListener("change", syncSubmitState);
  });

  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (successMessage) {
      successMessage.hidden = false;
    }

    demoForm.reset();
    syncSubmitState();
  });

  syncSubmitState();
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
