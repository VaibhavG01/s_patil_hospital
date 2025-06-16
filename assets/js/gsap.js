
// GSAP animation on load
window.addEventListener("DOMContentLoaded", () => {
    gsap.from("#nav-brand", {
        opacity: 0,
        x: -50,
        duration: 1
    });

    gsap.from("#nav-links a", {
        opacity: 0,
        y: -10,
        stagger: 0.1,
        delay: 0.5,
        duration: 0.6
    });

    gsap.from("#hamburger", {
        opacity: 0,
        x: 50,
        delay: 0.8,
        duration: 0.6
    });
});



window.addEventListener('DOMContentLoaded', () => {
    gsap.timeline()
        .to("#hero-heading", { opacity: 1, y: -20, duration: 1 })
        .to("#hero-subtext", { opacity: 1, y: -20, duration: 1 }, "-=0.5")
        .to("#hero-buttons", { opacity: 1, y: -10, duration: 0.8 }, "-=0.5");
});

