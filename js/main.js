function toggleMenu() {
  const nav = document.getElementById('navigation');
  nav.classList.toggle('active');
}
const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);