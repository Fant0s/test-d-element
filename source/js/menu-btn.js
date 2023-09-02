function menuNav() {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.menu-btn__items');

  menuBtn.onclick = function () {
    nav.classList.toggle('menu-btn__items--open');
    document.body.classList.toggle('no-scroll');
  };
}

export default menuNav();
