// Wait for the DOM to be completely loaded
document.addEventListener('DOMContentLoaded', () => {
    // Handle "Learn more" link clicks
    const learnMoreLinks = document.querySelectorAll('.project a');
    learnMoreLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank'); // Open in a new tab
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            contactForm.reset(); // Reset the form
        });
    }

});
