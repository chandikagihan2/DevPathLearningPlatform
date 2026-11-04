
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


const courseButtons = document.querySelectorAll(".view-btn");

const courseDialog = document.getElementById("courseDialog");

const dialogTitle = document.getElementById("dialogTitle");

const dialogDescription = document.getElementById("dialogDescription");

const completeBtn = document.getElementById("completeBtn");

const closeBtn = document.getElementById("closeBtn");

const progressFill = document.querySelector(".progress-fill");

const learningStatus = document.getElementById("learningStatus");


const completedCourses = new Set();

let selectedCourse = "";


courseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedCourse = button.dataset.course;

        dialogTitle.textContent = selectedCourse;

        dialogDescription.textContent = button.dataset.description;

        completeBtn.disabled = completedCourses.has(selectedCourse);

        completeBtn.textContent = completeBtn.disabled
            ? "Already Completed"
            : "Mark as Completed";

        courseDialog.showModal();

    });

});


completeBtn.addEventListener("click", function () {

    if (!selectedCourse) return;

    completedCourses.add(selectedCourse);

    updateProgress();

    completeBtn.disabled = true;

    completeBtn.textContent = "Completed ✓";

});
l

closeBtn.addEventListener("click", function () {

    courseDialog.close();

});


function updateProgress() {

    const totalCourses = courseButtons.length;

    const completed = completedCourses.size;

    const percentage = (completed / totalCourses) * 100;

    progressFill.style.width = percentage + "%";

    learningStatus.textContent =
        completed + " of " + totalCourses + " courses completed";

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
