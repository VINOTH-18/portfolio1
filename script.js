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

    // Fetch and display data from a mock API
    const mockApiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your mock API URL
    const projectList = document.querySelector('.project-list');

    if (projectList) {
        fetch(mockApiUrl)
            .then(response => response.json())
            .then(data => {
                // Use higher-order functions to filter and map the data
                const projects = data.slice(0, 6).map(project => ({
                    title: project.title,
                    description: project.body,
                }));

                // Update the DOM with fetched data
                projects.forEach((project, index) => {
                    const projectElement = document.createElement('div');
                    projectElement.classList.add('project');
                    projectElement.innerHTML = `
                        <h3>Project ${index + 1}: ${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="#">Learn more</a>
                    `;
                    projectList.appendChild(projectElement);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Dynamic content updates based on user actions
    const dynamicButton = document.createElement('button');
    dynamicButton.textContent = 'Click for Surprise!';
    dynamicButton.style.marginTop = '20px';
    dynamicButton.addEventListener('click', () => {
        const surpriseMessage = document.createElement('p');
        surpriseMessage.textContent = 'Surprise! You clicked the button.';
        surpriseMessage.style.color = 'red';
        projectList.appendChild(surpriseMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
            projectList.removeChild(surpriseMessage);
        }, 3000);
    });
    if (projectList) projectList.parentElement.appendChild(dynamicButton);

    // Asynchronous programming with Promises
    const mockPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise Resolved: Data Loaded Successfully!');
            }, 2000);
        });
    };

    mockPromise()
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.error('Promise Rejected:', error);
        });
});
