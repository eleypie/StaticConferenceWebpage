document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    const logo = document.querySelector('.logo');
    const body = document.body;

    mobileToggle.setAttribute('aria-expanded', 'false');
    primaryNav.setAttribute('data-visible', 'false');

    function toggleMenu() {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        primaryNav.setAttribute('data-visible', !isExpanded);
        
        body.style.overflow = isExpanded ? '' : 'hidden';
        
        if (!isExpanded) {
            setTimeout(() => logo.classList.add('menu-open'), 50);
        } else {
            logo.classList.remove('menu-open');
        }
       
        mobileToggle.classList.toggle('active', !isExpanded);
    }

    mobileToggle.addEventListener('click', toggleMenu);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNav.getAttribute('data-visible') === 'true') {
                toggleMenu();
            }
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && primaryNav.getAttribute('data-visible') === 'true') {
            toggleMenu();
        }
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