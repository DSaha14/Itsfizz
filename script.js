
// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Import GSAP correctly
  const { gsap } = require("gsap");

  // Function to check if an element exists before animating
  function animateIfExists(selector, animation) {
    if (document.querySelector(selector)) {
      gsap.from(selector, animation);
    }
  }

  // Animations
  animateIfExists(".element", { opacity: 0, y: -50, duration: 1 });

  animateIfExists(".hero-title", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
  });

  animateIfExists(".hero-subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
  });
});
