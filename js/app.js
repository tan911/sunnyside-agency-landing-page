'use strict';

const hambugerMenuBtn = document.querySelector('.navigation__hamburger__menu');
const menu = document.querySelector('.navigation__list');

hambugerMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
