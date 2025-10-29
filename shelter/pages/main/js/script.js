// ====================== Загрузка данных ======================
let json = [];

async function loadPets() {
  try {
    const response = await fetch("./js/pets.json"); // путь уточни, если нужно
    json = await response.json();
    initApp();
  } catch (err) {
    console.error("Ошибка при загрузке pets.json:", err);
  }
}

// ====================== Инициализация ======================
function initApp() {
  initBurger();
  initSlider();
  initPopup();
}

loadPets();

// ====================== Burger menu ======================
function initBurger() {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav__active");
  });

  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav__active");
  });

  if (window.innerWidth <= 768) {
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("header__nav__active");
      });
    });
  }
}

// ====================== Slider ======================
function initSlider() {
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const imgPetOne = document.querySelector(".pets-katrine");
  const namePetOne = document.querySelector(".name-Katrine");
  const imgPetTwo = document.querySelector(".pets-jennifer");
  const namePetTwo = document.querySelector(".name-Jennifer");
  const imgPetThree = document.querySelector(".pets-woody");
  const namePetThree = document.querySelector(".name-Woody");

  let firstCard, secondCard, thirdCard;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7];

  // инициализация карточек
  function randomCards() {
    let temp = [...arr];
    firstCard = temp.splice(Math.floor(Math.random() * temp.length), 1)[0];
    secondCard = temp.splice(Math.floor(Math.random() * temp.length), 1)[0];
    thirdCard = temp.splice(Math.floor(Math.random() * temp.length), 1)[0];
  }

  function changeCard() {
    imgPetOne.src = json[firstCard].img;
    namePetOne.textContent = json[firstCard].name;

    imgPetTwo.src = json[secondCard].img;
    namePetTwo.textContent = json[secondCard].name;

    imgPetThree.src = json[thirdCard].img;
    namePetThree.textContent = json[thirdCard].name;
  }

  function slideRight() {
    firstCard = (firstCard + 1) % json.length;
    secondCard = (secondCard + 1) % json.length;
    thirdCard = (thirdCard + 1) % json.length;
    changeCard();
  }

  function slideLeft() {
    firstCard = (firstCard - 1 + json.length) % json.length;
    secondCard = (secondCard - 1 + json.length) % json.length;
    thirdCard = (thirdCard - 1 + json.length) % json.length;
    changeCard();
  }

  randomCards();
  changeCard();

  arrowRight.addEventListener("click", slideRight);
  arrowLeft.addEventListener("click", slideLeft);
}

// ====================== Popup ======================
function initPopup() {
  const popup = document.querySelector(".popup");
  const popupContainer = document.querySelector(".popup__container");
  const openFirstPopup = document.querySelector(".katrine");
  const openSecondPopup = document.querySelector(".jennifer");
  const openThirdPopup = document.querySelector(".woody");
  const closePopup = document.querySelector(".close__popup");

  const popupImg = document.querySelector(".popup-img");
  const popupPetName = document.querySelector(".popup__container__text__name");
  const popupPetTypeBreed = document.querySelector(
    ".popup__container__text__type-breed"
  );
  const popupPetDescription = document.querySelector(
    ".popup__container__text__description"
  );
  const popupAge = document.querySelector(".popup__pet-age");
  const popupInoculations = document.querySelector(".popup__pet-inoculations");
  const popupDiseases = document.querySelector(".popup__pet-diseases");
  const popupParasites = document.querySelector(".popup__pet-parasites");

  function openPopup(cardIndex) {
    const pet = json[cardIndex];
    popupImg.src = pet.img;
    popupPetName.textContent = pet.name;
    popupPetTypeBreed.textContent = `${pet.type} - ${pet.breed}`;
    popupPetDescription.textContent = pet.description;
    popupAge.textContent = pet.age;
    popupInoculations.textContent = pet.inoculations;
    popupDiseases.textContent = pet.diseases;
    popupParasites.textContent = pet.parasites;

    popup.classList.add("active");
    popupContainer.classList.add("active");
  }

  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
    popupContainer.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
      popupContainer.classList.remove("active");
    }
  });

  openFirstPopup.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup(0);
  });

  openSecondPopup.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup(1);
  });

  openThirdPopup.addEventListener("click", (e) => {
    e.preventDefault();
    openPopup(2);
  });
}
