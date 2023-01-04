'use strict';

const hamburgerBtn = document.querySelector('.hamburger__btn');
const menu = document.querySelector('.nav')
hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('display')
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && menu.classList.contains('display')) {
    menu.classList.remove('display')
  }
})

document.querySelector('.main').addEventListener('click', () => {
  if(menu.classList.contains('display')) {
    menu.classList.remove('display')
  }
});

// REVEALING in SCROLL
const itemReveal =  document.querySelectorAll('.reveal-in-scroll');

const revealingItems = function (entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  menu.classList.remove('display');
  entry.target.classList.remove('item--hidden');
}

const itemRevealObserver = new IntersectionObserver(
  revealingItems, {
    root: null,
    threshold: 0.16,
  }
);

itemReveal.forEach((item) => {
  itemRevealObserver.observe(item);
  item.classList.add('item--hidden')
})
