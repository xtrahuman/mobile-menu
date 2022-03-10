// Display mobile menu
const menubar = document.querySelector('.menu-bars');
const navflex = document.querySelector('#desktop-nav');
const bodyfix = document.querySelector('body');

window.onclick = function check(event) {
  if (
    event.target.matches('.nav-link')
  // || event.target.matches('.check')
  // || event.target.matches('.fa-angle-right')
  ) {
    navflex.classList.remove('toggle');
    menubar.classList.remove('toggle-menu');
    bodyfix.classList.remove('static');
  }
};

const mobilemenu = () => {
  menubar.classList.toggle('toggle-menu');
  navflex.classList.toggle('toggle');
  bodyfix.classList.remove('static');
};

menubar.addEventListener('click', mobilemenu);
