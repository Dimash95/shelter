// console.log('Самооценка - 100/100:');

// console.log('1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14');
// console.log('2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14');
// console.log('3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14');
// console.log('4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6');
// console.log('5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6');
// console.log('6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6');
// console.log('7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20');
// console.log('8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8');
// console.log('9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4');
// console.log('6. Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис: +8');


// burger menu start


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


// burger menu finish



// slider start


import json from './pets.json' assert { type: 'json' };
console.log(json)
// const pets = JSON.parse(json);
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const imgPets = document.querySelectorAll('.pets-jennifer');

for (let i = 0; i < json.length; i++) {

}

imgPets.src = `${json[4].img}`;
console.log(imgPets);

document.getElementById('#jen').src = 'json[4].img';


