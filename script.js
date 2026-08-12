const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 35, 250)}ms`;
  observer.observe(el);
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
}, { passive: true });

document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert("Link masih placeholder. Nanti kita isi dengan WhatsApp, Discord, Instagram, dan email asli Serenity Unit.");
  });
});
