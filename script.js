const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }
});