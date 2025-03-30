document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    
    mobileToggle.addEventListener('click', function() {
        const visibility = primaryNav.getAttribute('data-visible');
        
        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', "true");
            mobileToggle.setAttribute('aria-expanded', "true");
            mobileToggle.classList.add('active');
        } else {
            primaryNav.setAttribute('data-visible', "false");
            mobileToggle.setAttribute('aria-expanded', "false");
            mobileToggle.classList.remove('active');
        }
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

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