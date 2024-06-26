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
const carouselInner = document.querySelector('.c-carousel__inner');
const carouselItems = document.querySelectorAll('.c-carousel__item');
const pagination = document.querySelector('.c-pagination');

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

setInterval(nextSlide, 5000); // Change slide every 3 seconds

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.c-carousel2__items').length;

function moveCarousel(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const carouselItems = document.querySelectorAll('.c-carousel2__items');
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
    const tabContents = document.querySelectorAll('.l-tabcontent');
    tabContents.forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Remove 'active' class from all tab links
    const tabLinks = document.querySelectorAll('.c-tablinks');
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
    const accordionBtns = document.querySelectorAll('.c-accordion__btn');

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
