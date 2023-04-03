
(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header__nav');
   const menuCloseItem = document.querySelector('.header__nav-close');
   const menuLinks = document.querySelectorAll('.header__link');

   burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav__active');

   });
   menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav__active');
   })
   if (window.innerWidth <= 768) {
      for (let i = 0; i < menuLinks.length; i++) {
         menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header__nav__active');
         });
      }
   }
}());