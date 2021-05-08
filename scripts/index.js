const page = document.querySelector('.page');
// Кнопка бургер меню в хедере+++++++++++++++++++++++++++++++++++++++++++++++
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

// Кнопка открытия попапа в календаре++++++++++++++++++++++++++++++++++++++++++
const popupCalendar = page.querySelector('.overlay_type_calendar');
const buttonCalendar = page.querySelector('.button_place_calendar-points');
buttonCalendar.addEventListener('click', () => {
  popupCalendar.classList.remove('window_closed');
});

// Кнопка закрыть попап(оверлей)
page.addEventListener('click', evt => {
  if (evt.target.classList.contains('popup__close')) {
    evt.target.closest('.overlay').classList.add('window_closed');
  }
});