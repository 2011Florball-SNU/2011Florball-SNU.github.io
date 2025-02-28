window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const content = document.querySelector(".content");

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    content.classList.remove("hide");
    setTimeout(() => (loadingScreen.style.display = "none"), 500);
  }, 2000);
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "light" : "dark"
  );
  themeToggle.innerHTML = `<i class="fas fa-${isDark ? "sun" : "moon"}"></i>`;
});

document.querySelectorAll(".link-card").forEach((card, index) => {
  card.style.animationDelay = `${(index + 1) * 0.1}s`;
});

const supportBtn = document.getElementById("supportBtn");
const supportOptions = document.getElementById("supportOptions");

supportBtn.addEventListener("click", () => {
  supportOptions.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!supportBtn.contains(e.target) && !supportOptions.contains(e.target)) {
    supportOptions.classList.remove("show");
  }
});

document.getElementById("powerButton").addEventListener("click", () => {
  const dragon = document.querySelector(".corner-dragon");
  const rect = dragon.getBoundingClientRect();

  const button = document.getElementById("powerButton");
  button.style.transform = "scale(0.95)";
  setTimeout(() => (button.style.transform = ""), 150);
});
