
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


// burger menu end



// slider start


import json from './pets.json' assert { type: 'json' };


const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const imgPetOne = document.querySelector('.pets-katrine');
const namePetOne = document.querySelector('.name-Katrine')
const imgPetTwo = document.querySelector('.pets-jennifer');
const namePetTwo = document.querySelector('.name-Jennifer');
const imgPetThree = document.querySelector('.pets-woody');
const namePetThree = document.querySelector('.name-Woody');




let firstCard,
   secondCard,
   thirdCard;


let arr = [0, 1, 2, 3, 4, 5, 6, 7];



firstCard = arr[Math.floor(Math.random() * arr.length)];


arr = arr.filter((n) => { return n != firstCard });
secondCard = arr[Math.floor(Math.random() * arr.length)];


arr = arr.filter((m) => { return m != secondCard });
thirdCard = arr[Math.floor(Math.random() * arr.length)];





imgPetOne.src = json[firstCard].img;
namePetOne.textContent = json[firstCard].name;

imgPetTwo.src = json[secondCard].img;
namePetTwo.textContent = json[secondCard].name;

imgPetThree.src = json[thirdCard].img;
namePetThree.textContent = json[thirdCard].name;



function slideRight() {

   if (firstCard === 7) {
      firstCard = 0;
   } else {
      firstCard += 1;
   }

   if (secondCard === 7) {
      secondCard = 0;
   } else {
      secondCard += 1;
   }

   if (thirdCard === 7) {
      thirdCard = 0;
   } else {
      thirdCard += 1;
   }

   changeCard();
} slideRight();

function slideLeft() {

   if (firstCard === 7) {
      firstCard = 0;
   } else {
      firstCard += 1;
   }

   if (secondCard === 7) {
      secondCard = 0;
   } else {
      secondCard += 1;
   }

   if (thirdCard === 7) {
      thirdCard = 0;
   } else {
      thirdCard += 1;
   }

   changeCard();
} slideRight();




function changeCard() {
   imgPetOne.src = json[firstCard].img;
   namePetOne.textContent = json[firstCard].name;

   imgPetTwo.src = json[secondCard].img;
   namePetTwo.textContent = json[secondCard].name;

   imgPetThree.src = json[thirdCard].img;
   namePetThree.textContent = json[thirdCard].name;

}


arrowRight.addEventListener('click', slideRight);
arrowLeft.addEventListener('click', slideLeft);


// slider end





//popup start


let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');

let openFirstPopup = document.querySelector('.katrine');
let openSecondPopup = document.querySelector('.jennifer');
let openThirdPopup = document.querySelector('.woody');

let closePopup = document.querySelector('.close__popup');

let popupImg = document.querySelector('.popup-img');
let popupPetName = document.querySelector('.popup__container__text__name');
let popupPetTypeBreed = document.querySelector('.popup__container__text__type-breed');
let popupPetDescription = document.querySelector('.popup__container__text__description');
let popupAge = document.querySelector('.popup__pet-age');
let popupInoculations = document.querySelector('.popup__pet-inoculations');
let popupDiseases = document.querySelector('.popup__pet-diseases');
let popupParasites = document.querySelector('.popup__pet-parasites');





// openPopupButton.forEach((button) => {
//    button.addEventListener('click', (e) => {
//       e.preventDefault();
//       popup.classList.add('active');                            //сложный способ forEach
//       popupContainer.classList.add('active');
//       popupCard();
//    })
// });


closePopup.addEventListener('click', () => {
   popup.classList.remove('active');
   popupContainer.classList.remove('active');
})

document.addEventListener('click', (e) => {
   if (e.target === popup) {
      popup.classList.remove('active');
      popupContainer.classList.remove('active');
   }
})



openFirstPopup.addEventListener('click', (e) => {
   e.preventDefault();                                        //сложный способ
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupFirstCard();
})

openSecondPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupSecondCard();
})


openThirdPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupThirdCard();
   // stopScroll()
})



// function openPopup(){
//    popup.classList.add('active');
//    popupContainer.classList.add('active');
//    popupCard();                                                //простой способ
// }

// openFirstPopup.addEventListener('click', openPopup)


function popupFirstCard() {
   popupImg.src = json[firstCard].img;
   popupPetName.textContent = json[firstCard].name;
   popupPetTypeBreed.textContent = `${json[firstCard].type} - ${json[firstCard].breed}`;
   popupPetDescription.textContent = json[firstCard].description;
   popupAge.textContent = json[firstCard].age;
   popupInoculations.textContent = json[firstCard].inoculations;
   popupDiseases.textContent = json[firstCard].diseases;
   popupParasites.textContent = json[firstCard].parasites;
}

function popupSecondCard() {
   popupImg.src = json[secondCard].img;
   popupPetName.textContent = json[secondCard].name;
   popupPetTypeBreed.textContent = `${json[secondCard].type} - ${json[secondCard].breed}`;
   popupPetDescription.textContent = json[secondCard].description;
   popupAge.textContent = json[secondCard].age;
   popupInoculations.textContent = json[secondCard].inoculations;
   popupDiseases.textContent = json[secondCard].diseases;
   popupParasites.textContent = json[secondCard].parasites;
}

function popupThirdCard() {
   popupImg.src = json[thirdCard].img;
   popupPetName.textContent = json[thirdCard].name;
   popupPetTypeBreed.textContent = `${json[thirdCard].type} - ${json[thirdCard].breed}`;
   popupPetDescription.textContent = json[thirdCard].description;
   popupAge.textContent = json[thirdCard].age;
   popupInoculations.textContent = json[thirdCard].inoculations;
   popupDiseases.textContent = json[thirdCard].diseases;
   popupParasites.textContent = json[thirdCard].parasites;
}


//popup end