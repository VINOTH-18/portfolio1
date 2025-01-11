// Wait for the DOM to be completely loaded
document.addEventListener('DOMContentLoaded', function() {

    // Find all "Learn more" links
    const learnMoreLinks = document.querySelectorAll('.project a');

    // Add click event listeners to each "Learn more" link
    learnMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the URL from the href attribute of the clicked link
            const url = link.getAttribute('href');

            // Open the URL in a new tab
            window.open(url, '_blank');
        });
    });
});

// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly to the section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Wait for the DOM to be completely loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate the form fields
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate a successful form submission
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset(); // Reset the form
    });
});

