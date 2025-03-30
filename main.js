// Tab functionality
document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.day-schedule').forEach(s => s.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.day).classList.add('active');
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