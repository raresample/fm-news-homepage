const navbar = document.querySelector('nav');
const navBackground = document.getElementById('nav-background');
const openMenu = document.getElementById('menu-button');
const closeMenu = document.getElementById('menu-close');

openMenu.addEventListener('click', () => {
  navbar.classList.add('open');
  navbar.classList.remove('closed');
  navBackground.classList.remove('closed');
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove('open');
  navbar.classList.add('closed');
  navBackground.classList.add('closed');
});