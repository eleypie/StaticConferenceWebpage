document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".mobile-toggle");
    const navMenu = document.querySelector(".primary-navigation");

    toggleButton.addEventListener("click", function () {
        const isVisible = navMenu.getAttribute("data-visible") === "true";
        navMenu.setAttribute("data-visible", !isVisible);
    });
});

// Tab functionality
document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.day-schedule').forEach(s => s.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.day).classList.add('active');
    });
});