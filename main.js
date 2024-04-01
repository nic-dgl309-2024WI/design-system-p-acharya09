function toggleMenu(show) {
    const navLinks = document.querySelector('nav ul');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    if (show) {
      navLinks.classList.add('show');
      hamburgerBtn.style.display = 'none';
      closeBtn.style.display = 'block';
    } else {
      navLinks.classList.remove('show');
      hamburgerBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    }
  }
  