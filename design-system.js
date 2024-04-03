document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.navbar__hamburger-icon');
    const closeButton = document.querySelector('.navbar__close-button');
    const navLinks = document.querySelector('.navbar__nav-links');
    const sidebar = document.querySelector('.sidebar');


    hamburgerIcon.addEventListener('click', function() {
        navLinks.style.display = 'block';
        sidebar.style.display = 'block';
        closeButton.style.display = 'block';
        hamburgerIcon.style.display = 'none';
    });


    closeButton.addEventListener('click', function() {
        navLinks.style.display = 'none';
        sidebar.style.display = 'none';
        closeButton.style.display = 'none';
        hamburgerIcon.style.display = 'block';
    });
});

// Hero Items  
const carouselInner = document.querySelector('.hero__carousel-inner');
const carouselItems = document.querySelectorAll('.hero__carousel-item');
const pagination = document.querySelector('.hero__pagination');

let currentIndex = 0;
const totalItems = carouselItems.length;

function showCurrentIndex() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update pagination dots
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showCurrentIndex();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    showCurrentIndex();
}

// Create pagination dots
for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('span');
    dot.classList.add('pagination-dot');
    if (i === 0) {
        dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
        currentIndex = i;
        showCurrentIndex();
    });
    pagination.appendChild(dot);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
  