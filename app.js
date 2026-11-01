
// Select the theme button
const themeToggle = document.getElementById("themeToggle");

// Check saved theme
const savedTheme = localStorage.getItem("devpath-theme");

// Apply saved theme
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

function updateButton() {
    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
}

// Change theme when button is clicked
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
        "devpath-theme",
        isLight ? "light" : "dark"
    );

    updateButton();
});

// Set correct button text
updateButton();
