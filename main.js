


// Tab functionality
document.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and schedules
        document.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.day-schedule').forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding schedule
        tab.classList.add('active');
        document.getElementById(tab.dataset.day).classList.add('active');
    });
});

