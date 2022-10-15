const menu =document.querySelector(`#mobile-menu`)
const menuLinks = document.querySelector(`.navbar__menu`)

menu.addEventListner(`click`, function() {
  menu.classList.toggle(`is-active`)
  menuLinks.classList.toggle(`active`);