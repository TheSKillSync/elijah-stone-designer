document.addEventListener('DOMContentLoaded', () => {
    // Animate header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(51, 51, 51, 0.9)';
            header.style.padding = '10px 20px';
        } else {
            header.style.background = '#333';
            header.style.padding = '20px';
        }
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Button hover effect
    const button = document.getElementById('emailbut');
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});










// Header Shrink Effect on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {  // When scroll position is more than 50px
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Fade-in Effect on Scroll for Cards
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect();
        if (cardPosition.top >= 0 && cardPosition.bottom <= window.innerHeight) {
            card.classList.add('visible');
        }
    });
});

// Optional: Add Fade-in effect to elements on page load
window.addEventListener('load', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });
});



































const images = document.querySelectorAll('.carousel-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Show the current image based on the index
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Go to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Go to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Event listeners for buttons
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Auto-play carousel every 3 seconds
setInterval(nextImage, 3000);
