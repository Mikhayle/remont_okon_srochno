const cards = document.querySelectorAll(`.rotate-card`);
const cardsNoClick  = document.querySelectorAll(`.rotate-card-no-click`);

const cardsEventHandler = (el) => {
  el.querySelector(`.front-js`).classList.toggle(`front-card_rotate-js`);
  el.querySelector(`.back-js`).classList.toggle(`back-card_rotate-js`);

}

cardsNoClick.forEach(el => {
  el.addEventListener(`mouseenter`, (event) => {
    cardsEventHandler(el);
  });
});

cards.forEach(el => {
  el.addEventListener(`click`, (event) => {
    cardsEventHandler(el);
  });
});
