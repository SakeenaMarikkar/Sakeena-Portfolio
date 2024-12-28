// Script for interactive elements of the portfolio

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic greeting based on time of day
const greetingElement = document.querySelector('.bio h1');
const currentHour = new Date().getHours();
let greeting = 'Hello';
if (currentHour < 12) {
    greeting = 'Good Morning';
} else if (currentHour < 18) {
    greeting = 'Good Afternoon';
} else {
    greeting = 'Good Evening';
}
greetingElement.textContent = `${greeting}, I'm Sakeena Marikkar!`;

// Modal for project details (if applicable)
const projectCards = document.querySelectorAll('.project-card');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('h3').textContent;
        const projectDescription = card.querySelector('p').textContent;

        modalContent.innerHTML = `
            <h2>${projectTitle}</h2>
            <p>${projectDescription}</p>
        `;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Set the fluency levels for the skills dynamically
document.querySelectorAll('.fluid-progress').forEach(progressBar => {
    const fluency = progressBar.style.width;
    progressBar.style.transition = 'width 1s ease-out';
    progressBar.style.width = fluency;
});

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.navbar-toggle');

    toggleButton.addEventListener('click', function() {
        navBar.classList.toggle('hidden');
    });
});

// Hide the navbar when scrolling down and show it when scrolling up

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scrolling
});
