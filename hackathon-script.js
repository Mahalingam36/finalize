// =========================================================
// ROBOFORGE 2K26 (Hackathon) — site behaviour
// =========================================================

// EDIT ME: set this to the real reporting date/time for the event.
// Format: "YYYY-MM-DDTHH:MM:SS+05:30" (IST offset)
const EVENT_START = new Date("2026-10-01T09:00:00+05:30");

// ---- Nav: background on scroll + mobile toggle ----
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function onScroll() {
  if (window.scrollY > 40) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-scrolled", isOpen || window.scrollY > 40);
  });

  // Close the mobile menu after tapping a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---- Countdown ----
const els = {
  days: document.getElementById("cd-days"),
  hours: document.getElementById("cd-hours"),
  mins: document.getElementById("cd-mins"),
  secs: document.getElementById("cd-secs"),
};
const countdownLabel = document.querySelector(".countdown-label");

function pad(n) {
  return String(n).padStart(2, "0");
}

function tickCountdown() {
  const now = new Date();
  const diff = EVENT_START.getTime() - now.getTime();

  if (diff <= 0) {
    if (countdownLabel) countdownLabel.textContent = "RoboForge 2K26 is live";
    els.days.textContent = "00";
    els.hours.textContent = "00";
    els.mins.textContent = "00";
    els.secs.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  els.days.textContent = pad(days);
  els.hours.textContent = pad(hours);
  els.mins.textContent = pad(mins);
  els.secs.textContent = pad(secs);
}

if (els.days) {
  tickCountdown();
  setInterval(tickCountdown, 1000);
}