// Display mobile menu
const menubar = document.querySelector('.menu-bars');
const navflex = document.querySelector('#desktop-nav');


const mobilemenu = () => {
    menubar.classList.toggle('toggle-menu');
    navflex.classList.toggle('toggle');
  };

  menubar.addEventListener('click', mobilemenu);
  

  