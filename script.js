
const gsap = require("gsap").gsap; // Extract gsap from the module

gsap.from(".element", { opacity: 0, y: -50, duration: 1 });

gsap.from(".hero-title", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.5,
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1,
});
