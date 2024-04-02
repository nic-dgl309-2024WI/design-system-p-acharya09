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


// Function to open a specific tab
function openTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tabcontent');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Remove 'active' class from all tab links
    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add 'active' class to the clicked tab link
    event.currentTarget.classList.add('active');
}

// Set the default tab to be open
document.getElementById('defaultOpen').click();


document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle the active class to expand/collapse accordion content
            this.classList.toggle('active');

            // Get the sibling accordion content
            const content = this.nextElementSibling;

            // Toggle the display of accordion content
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});


// Get testimonials and pagination buttons
const testimonials = document.querySelectorAll('.testimonial__content');
const paginationButtons = document.querySelectorAll('.testimonial__pagination button');

// Set current page and testimonials per page
let currentPage = 0;
const testimonialsPerPage = 1;

// Show testimonials based on current page
function showTestimonials() {
    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;

    testimonials.forEach((testimonial, index) => {
        if (index >= startIndex && index < endIndex) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

// Go to next page
function nextPage() {
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
    currentPage = (currentPage + 1) % totalPages;
    showTestimonials();
}

// Go to previous page
function previousPage() {
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    showTestimonials();
}

// Initially show testimonials
showTestimonials();
