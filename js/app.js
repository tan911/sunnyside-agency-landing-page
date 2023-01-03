'use strict';

const hamburgerBtn = document.querySelector('.hamburger__btn');
const menu = document.querySelector('.nav')
hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('display')
})