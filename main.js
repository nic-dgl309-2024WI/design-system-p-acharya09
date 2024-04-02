// Navigation Menu
function toggleMenu(show) {
    const navMenu = document.querySelector('.navigation__menu');
    const hamburgerBtn = document.querySelector('.navigation__hamburger-btn');
    const closeBtn = document.querySelector('.navigation__close-btn');

    if (show) {
        navMenu.style.display = 'block';
        hamburgerBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
        hamburgerBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }
}


// Hero Items  
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const pagination = document.querySelector('.pagination');

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

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-items').length;

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-items');
    carouselItems.forEach((item, index) => {
        if (index === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

