const menuButton = document.querySelector('.header__button_type_menu');
const burgerMenu = document.querySelector('.header__menu');
const menuButtonClose = document.querySelector('.header__button_type_close');

function openMenu() {
  burgerMenu.classList.remove('window_closed');
}

function closedMenu() {
  burgerMenu.classList.add('window_closed');
}



menuButton.addEventListener('click', openMenu);
menuButtonClose.addEventListener('click', closedMenu);