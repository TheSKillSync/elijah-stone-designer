

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
;

































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




  












  











// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    const allDiv = document.getElementById('all');  // Get the div with id 'all'
  
    // Check if the div is in the viewport
    if (allDiv.getBoundingClientRect().top < window.innerHeight && !allDiv.classList.contains('visible')) {
      allDiv.classList.add('visible');  // Add the 'visible' class when it's in the viewport
    }
  });
  
  // Trigger scroll event on page load to handle already visible content (optional)
  window.dispatchEvent(new Event('scroll'));
  



















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











































// Show the popup after 5 seconds
window.onload = () => {
    setTimeout(() => {
      document.getElementById("emailPopup").style.display = "block";
    }, 5000);
  };
  
  // Close the popup
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("emailPopup").style.display = "none";
  });
  
  // Form submission handler
  document.getElementById("emailForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const email = document.getElementById("emailInput").value;
  
    // For now, log the email. Later, integrate with your email service.
    console.log("Email submitted:", email);
  
    // Close the popup after submission
    document.getElementById("emailPopup").style.display = "none";
  });
  






































































































  // Add a scroll-in effect to elements when they enter the viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-in'); // Select all elements with this class
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('in-view');
      }
    });
  }
  
  // Helper function to check if the element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  }
  
  // Add a class for scroll-in animation
  document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', animateOnScroll); // Trigger on scroll
  });
  