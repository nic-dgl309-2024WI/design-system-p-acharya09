function toggleMenu(show) {
    const navMenu = document.querySelector('.navigation__menu');
    const hamburgerBtn = document.querySelector('.navigation__hamburger-btn');
    const closeBtn = document.querySelector('.navigation__close-btn');
    
    if (show) {
      navMenu.style.display='block';
      hamburgerBtn.style.display = 'none';
      closeBtn.style.display = 'block';
    } else {
      navMenu.style.display='none';
      hamburgerBtn.style.display = 'block';
      closeBtn.style.display = 'none';
    }
  }
  