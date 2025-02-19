
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const { gsap } = require("gsap");

    function animateIfExists(selector, animation) {
      if (document.querySelector(selector)) {
        gsap.from(selector, animation);
      }
    }

    animateIfExists(".element", { opacity: 0, y: -50, duration: 1 });
    animateIfExists(".hero-title", { opacity: 0, y: 20, duration: 1, delay: 0.5 });
    animateIfExists(".hero-subtitle", { opacity: 0, y: 20, duration: 1, delay: 1 });
  });
}
