const body = document.querySelector(`body`);
const burger = document.querySelector(`.burger`);
const menu = document.querySelector(`.header__menu`);
const menuList = document.querySelector(`.header__menu-wrapper`);
const closeBtn = document.querySelector(`.menu__close`);
const modalContainer = document.querySelector(`.modal-container`);
const modalContainerThanks = document.querySelector(`.modal-container-thanks`);
const modalThanksBtn = document.querySelector(`.modal-thanks__btn`);
const callbackBtns = document.querySelectorAll(`.callback-js`);
const closeModalBtn = document.querySelector(`.modal__close`);
const menuItems = document.querySelectorAll(`.header__menu-link`);



const openMenu = () => {
  body.classList.add(`scroll-off`);
  menu.classList.add(`is-active`);
  setTimeout(() => {
    menuList.classList.add(`is-active`);
  }, 300);
};

const closeMenu = () => {
  body.classList.remove(`scroll-off`);
  menuList.classList.remove(`is-active`);
  setTimeout(() => {
    menu.classList.remove(`is-active`);
  }, 400);
};

burger.addEventListener(`click`, openMenu);
closeBtn.addEventListener(`click`, closeMenu);

callbackBtns.forEach(el => {
  el.addEventListener(`click`, () => {
    body.classList.add(`scroll-off`);
    setTimeout(() => {
      modalContainer.classList.add(`is-active`);
    }, 200);

  })
})

closeModalBtn.addEventListener(`click`, () => {
  modalContainer.classList.remove(`is-active`);
  body.classList.remove(`scroll-off`);
});

menuItems.forEach(el => {
  el.addEventListener(`click`, () => {
    console.log(menuItems)
    closeMenu();
  });
});

modalThanksBtn.addEventListener(`click`, () => {
  modalContainerThanks.classList.remove(`is-active`);
  body.classList.remove(`scroll-off`);
})
