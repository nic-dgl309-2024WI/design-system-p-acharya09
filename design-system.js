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
  