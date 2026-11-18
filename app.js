const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const header = document.querySelector(".site-header");

function onScroll() {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 16 ? "0 10px 30px rgba(20, 20, 20, 0.07)" : "none";
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
