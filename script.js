const body = document.body;
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener ("click", () => {
body.classList.toggle("dark"); toggle.textContent = body.classList.contains("dark")?  "☀️": "🌙";
});
