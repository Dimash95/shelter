
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

const firstPage = document.querySelector('.first-page');
const arrowLeft = document.querySelector('.arrow-left');
const numberPage = document.querySelector('.number-page');
const arrowRight = document.querySelector('.arrow-right');
const lastPage = document.querySelector('.last-page');

const imgPetOne = document.querySelector('.pets-katrine');
const namePetOne = document.querySelector('.name-katrine')
const imgPetTwo = document.querySelector('.pets-jennifer');
const namePetTwo = document.querySelector('.name-jennifer');
const imgPetThree = document.querySelector('.pets-woody');
const namePetThree = document.querySelector('.name-woody');
const imgPetFour = document.querySelector('.pets-sophia');
const namePetFour = document.querySelector('.name-sophia');
const imgPetFive = document.querySelector('.pets-timmy');
const namePetFive = document.querySelector('.name-timmy');
const imgPetSix = document.querySelector('.pets-charly');
const namePetSix = document.querySelector('.name-charly');
const imgPetSeven = document.querySelector('.pets-scarlett');
const namePetSeven = document.querySelector('.name-scarlett');
const imgPetEight = document.querySelector('.pets-freddie');
const namePetEight = document.querySelector('.name-freddie');






/////////////////////////   shuffle cards


let firstCard,
   secondCard,
   thirdCard,
   fourthCard,
   fifthCard,
   sixthCard,
   seventhCard,
   eighthCard;


let arr = [0, 1, 2, 3, 4, 5, 6, 7];

firstCard = arr[0]
secondCard = arr[1]
thirdCard = arr[2]
fourthCard = arr[3]
fifthCard = arr[4]
sixthCard = arr[5]
seventhCard = arr[6]
eighthCard = arr[7]


function shuffle() {

   if (numberPage.textContent === 1) {
      return
   }
   arr.sort(() => Math.random() - 0.5);


   firstCard = arr[0]
   secondCard = arr[1]
   thirdCard = arr[2]
   fourthCard = arr[3]
   fifthCard = arr[4]
   sixthCard = arr[5]
   seventhCard = arr[6]
   eighthCard = arr[7]

   imgPetOne.src = json[firstCard].img;
   namePetOne.textContent = json[firstCard].name;

   imgPetTwo.src = json[secondCard].img;
   namePetTwo.textContent = json[secondCard].name;

   imgPetThree.src = json[thirdCard].img;
   namePetThree.textContent = json[thirdCard].name;

   imgPetFour.src = json[fourthCard].img;
   namePetFour.textContent = json[fourthCard].name;

   imgPetFive.src = json[fifthCard].img;
   namePetFive.textContent = json[fifthCard].name;

   imgPetSix.src = json[sixthCard].img;
   namePetSix.textContent = json[sixthCard].name;

   imgPetSeven.src = json[seventhCard].img;
   namePetSeven.textContent = json[seventhCard].name;

   imgPetEight.src = json[eighthCard].img;
   namePetEight.textContent = json[eighthCard].name;

}







////////////////////////////////////     number

let x = 1;
numberPage.textContent = x;



function numberIncreas() {
   if (x < 16) {
      x += 1;
      numberPage.textContent = x;
   } else {
      return
   }
   shuffle()
}

function numberDecreas() {
   if (x > 1) {
      x -= 1;
      numberPage.textContent = x;
   } else {
      return
   }
   shuffle()
}


arrowRight.addEventListener('click', () => {
   numberIncreas();
   changeArrowColor();
});
arrowLeft.addEventListener('click', () => {
   numberDecreas();
   changeArrowColor();
});






function showLastPage() {
   if (x === 16) {
      return
   } else {
      x = 16
      numberPage.textContent = x
   }
   shuffle()
}

function showFirstPage() {
   if (x === 1) {
      return

   } else {
      x = 1
      numberPage.textContent = x
   }
   shuffle()
}





function changeArrowColor() {
   if (x !== 1) {
      arrowLeft.classList.add('active');
      firstPage.classList.add('active');
   } else {
      arrowLeft.classList.remove('active');
      firstPage.classList.remove('active');
   }

}


firstPage.addEventListener('click', () => {
   showFirstPage();
   changeArrowColor();
});

lastPage.addEventListener('click', () => {
   showLastPage();
   changeArrowColor();
});


// slider end









//popup start


let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');

let openFirstPopup = document.querySelector('.katrine');
let openSecondPopup = document.querySelector('.jennifer');
let openThirdPopup = document.querySelector('.woody');
let openFourthPopup = document.querySelector('.sophia');
let openFifthPopup = document.querySelector('.timmy');
let openSixthPopup = document.querySelector('.charly');
let openSeventhPopup = document.querySelector('.scarlett');
let openEighthPopup = document.querySelector('.freddie');

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
})

openFourthPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupFourthCard();
})

openFifthPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupFifthCard();
})

openSixthPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupSixthCard();
})

openSeventhPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupSeventhCard();
})

openEighthPopup.addEventListener('click', (e) => {
   e.preventDefault();
   popup.classList.add('active');
   popupContainer.classList.add('active');
   popupEighthCard();
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

function popupFourthCard() {
   popupImg.src = json[fourthCard].img;
   popupPetName.textContent = json[fourthCard].name;
   popupPetTypeBreed.textContent = `${json[fourthCard].type} - ${json[fourthCard].breed}`;
   popupPetDescription.textContent = json[fourthCard].description;
   popupAge.textContent = json[fourthCard].age;
   popupInoculations.textContent = json[fourthCard].inoculations;
   popupDiseases.textContent = json[fourthCard].diseases;
   popupParasites.textContent = json[fourthCard].parasites;
}

function popupFifthCard() {
   popupImg.src = json[fifthCard].img;
   popupPetName.textContent = json[fifthCard].name;
   popupPetTypeBreed.textContent = `${json[fifthCard].type} - ${json[fifthCard].breed}`;
   popupPetDescription.textContent = json[fifthCard].description;
   popupAge.textContent = json[fifthCard].age;
   popupInoculations.textContent = json[fifthCard].inoculations;
   popupDiseases.textContent = json[fifthCard].diseases;
   popupParasites.textContent = json[fifthCard].parasites;
}

function popupSixthCard() {
   popupImg.src = json[sixthCard].img;
   popupPetName.textContent = json[sixthCard].name;
   popupPetTypeBreed.textContent = `${json[sixthCard].type} - ${json[sixthCard].breed}`;
   popupPetDescription.textContent = json[sixthCard].description;
   popupAge.textContent = json[sixthCard].age;
   popupInoculations.textContent = json[sixthCard].inoculations;
   popupDiseases.textContent = json[sixthCard].diseases;
   popupParasites.textContent = json[sixthCard].parasites;
}

function popupSeventhCard() {
   popupImg.src = json[seventhCard].img;
   popupPetName.textContent = json[seventhCard].name;
   popupPetTypeBreed.textContent = `${json[seventhCard].type} - ${json[seventhCard].breed}`;
   popupPetDescription.textContent = json[seventhCard].description;
   popupAge.textContent = json[seventhCard].age;
   popupInoculations.textContent = json[seventhCard].inoculations;
   popupDiseases.textContent = json[seventhCard].diseases;
   popupParasites.textContent = json[seventhCard].parasites;
}

function popupEighthCard() {
   popupImg.src = json[eighthCard].img;
   popupPetName.textContent = json[eighthCard].name;
   popupPetTypeBreed.textContent = `${json[eighthCard].type} - ${json[eighthCard].breed}`;
   popupPetDescription.textContent = json[eighthCard].description;
   popupAge.textContent = json[eighthCard].age;
   popupInoculations.textContent = json[eighthCard].inoculations;
   popupDiseases.textContent = json[eighthCard].diseases;
   popupParasites.textContent = json[eighthCard].parasites;
}


//popup end