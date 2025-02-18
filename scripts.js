// Smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navigation menu (for smaller screens)
document.querySelector('#menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});
