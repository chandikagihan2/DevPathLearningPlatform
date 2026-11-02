
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("devpath-theme");

if (savedTheme === "light") {
    body.classList.add("light-theme");
}

function updateButton() {
    if (!themeToggle) return;

    const isLight = body.classList.contains("light-theme");
    themeToggle.textContent = isLight
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
}

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-theme");

        const isLight = body.classList.contains("light-theme");

        localStorage.setItem("devpath-theme", isLight ? "light" : "dark");
        updateButton();
    });
}

updateButton();
