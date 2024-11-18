import gsap from "gsap";

// Example: Animate an element with the class .my-element
export function initAnimations() {
  gsap.from(".my-element", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power1.out",
  });
}
