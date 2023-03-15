// Создание карточек с питомцами

function generatePetsCardNode(img, name, newId){
    let petsCardTemplate = document.getElementById('pets-card-template');
    let newPetsCard = petsCardTemplate.cloneNode(true);

    newPetsCard.getElementsByTagName('img')[0].src = img;
    newPetsCard.id = '';

    newPetsCard.getElementsByTagName('h4')[0].innerHTML = name;
    newPetsCard.id = newId;

    return newPetsCard;
}

function initPetsCard() {

    let Jennifer = {
        img: '../../assets/images/pets-jennifer.png',
        name: 'Jennifer',
        breed: 'Dog - Labrador',
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: ' 2 months',
        newId: 'pet1',
    }

    let Katrine = {
        img: '../../assets/images/pets-katrine.png',
        name: 'Katrine',
        breed: 'Cat - British Shorthair',
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: ' 1 year',
        newId: 'pet2',
    }

    let Woody = {
        img: '../../assets/images/pets-woody.png',
        name: 'Woody',
        breed: 'Dog - Golden Retriever',
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: ' 3.5 years',
        newId: 'pet3',
    }

    let Scarlet = {
        img: '../../assets/images/pets-scarlet.png',
        name: 'Scarlet',
        breed: 'Dog - Jack Russell Terrier',
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: ' 3 months',
        newId: 'pet4',
    }

    let Charly = {
        img: '../../assets/images/pets-charly.png',
        name: 'Charly',
        breed: 'Dog - Jack Russell Terrier ',
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: ' 3 years',
        newId: 'pet5',
    }

    let Freddie = {
        img: '../../assets/images/pets-freddie.png',
        name: 'Freddie',
        breed: 'Cat - British Shorthair',
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: ' 1.5 year',
        newId: 'pet6',
    }

    let Sophia = {
        img: '../../assets/images/pets-sophia.png',
        name: 'Sophia',
        breed: 'Dog - Shih tzu',
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: ' 2 months',
        newId: 'pet7',
    }

    let Timmy = {
        img: '../../assets/images/pets-timmy.png',
        name: 'Timmy',
        breed: 'Cat - British Shorthair',
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held.",
        age: ' 9 months',
        newId: 'pet8',
    }

    let Milly = {
        img: '../../assets/images/pets-milly.jpg',
        name: 'Milly',
        breed: 'Dog - Pomeranian',
        description: "Millie is a friendly Spitz who is looking for good hands. She loves to lick people's hands and faces, and he also loves to play, especially with balls. This cute Pomeranian was found in a terrible state, hairless and with a lot of fleas. But now she is full of energy again and needs loving owners.",
        age: ' 1 year',
        newId: 'pet9',
    }

    let Vasiliy = {
        img: '../../assets/images/pets-vasiliy.jpg',
        name: 'Vasiliy',
        breed: 'Cat - European Shorthair',
        description: "Vasya is a very smart and intelligent cat. He knows the tray perfectly, accustomed to dry food. The cat is very affectionate, loves to sit on the handles and purr. And he gets along well with other cats, does not conflict with dogs.",
        age: ' 2 years',
        newId: 'pet10',
    }

    let Lenny = {
        img: '../../assets/images/pets-lenny.jpg',
        name: 'Lenny',
        breed: 'Dog - Staffordshire Bull Terrier',
        description: "Lenny loves people very much and is ready to tirelessly play and run with them so that they pay attention to him. He is a very smart dog, he is easy to train, knows how to walk on a leash and rides well in a car.",
        age: ' 8 months',
        newId: 'pet11',
    }
    
    let Boris = {
        img: '../../assets/images/pets-boris.jpg',
        name: 'Boris',
        breed: 'Cat - oriental',
        description: "Boris is a cat of an unusual breed, with his own character. The cat is healthy, well-groomed, accustomed to the tray, not picky about food. He is about 4 years old, but he is still quite young, active and playful. During his short life, he experienced a lot, but this did not break him, but rather made him more balanced.",
        age: ' 4 years',
        newId: 'pet12',
    }

    return [Jennifer, Katrine, Woody, Scarlet, Charly, Freddie, Sophia, Timmy, Milly, Vasiliy, Lenny, Boris];
}


let petsCardFree = initPetsCard();
let cardsContainer = document.getElementsByClassName('wrap-pets-cards')[0];

let petsCardNumber = 12; // общее число карточек

// рандомное размещение карточек

let pageWidth = document.documentElement.scrollWidth; // ширина страницы
    let petsCardCount = 3; // число видимых карточек
    let cardsNumber = 12; // общее число карточек
    let petsCardWidth = 270; // ширина одной карточки
    let gap = 90;
    let slideWidth = petsCardWidth * petsCardCount + gap * petsCardCount; // ширина одного слайда 
    


    
// создание карусели
function buildSliderList() {
    cardsContainer.innerHTML = '';
    petsCardFree = initPetsCard();
    pageWidth = document.documentElement.scrollWidth; // ширина страницы
    
    if (pageWidth > 1055) {
        petsCardCount = 3;
        gap = 90;
    }

    if (pageWidth < 1055) {
        petsCardCount = 2;
    }

    if (pageWidth < 1240) {
        gap = 40;
    }

    if (pageWidth < 600) {
        petsCardCount = 1;
    }
    
    slideWidth = petsCardWidth * petsCardCount + gap * petsCardCount;

    for (let i = 0; i < petsCardNumber; i++){
        let randomNumber = Math.trunc(Math.random()*petsCardFree.length);
        let currentPets = petsCardFree[randomNumber];
    
        petsCardFree.splice(randomNumber, 1);
    
        let currentPetsNode = generatePetsCardNode(currentPets.img, currentPets.name, currentPets.newId);
        cardsContainer.appendChild(currentPetsNode);
    }
}

buildSliderList();
// window.addEventListener('resize', buildSliderList);

let sliderList = document.querySelector('.wrap-pets-cards'); // "лента" с карточками

let btnPrev = carousel.querySelector('.prev');
let btnNext = carousel.querySelector('.next');

let pos = 0;

sliderList.style.width = cardsNumber * petsCardWidth + gap * cardsNumber + 'px';

btnPrev.onclick = scrollToPrev;
btnNext.onclick = scrollToNext;

function scrollToPrev() { // пролистывание влево
  pos--;
  
  if (pos < 0) {
    sliderList.style.transition = null;

    sliderList.style.marginLeft = -(pos + 2) * slideWidth + 'px';

    let cloneElem;
    for (let i = 1; i <= petsCardCount; i ++) {
        cloneElem = sliderList.children[cardsNumber - 1].cloneNode(true);
        cloneElem.addEventListener('click', showActivePopup);
        sliderList.insertBefore(cloneElem, sliderList.children[0]);
        sliderList.removeChild(sliderList.children[cardsNumber]);
    }

    pos++;
  }
  
  setTimeout(function() {
    sliderList.style.marginLeft = -(slideWidth * pos) + 'px';
    sliderList.style.transition = 'margin-left 0.6s ease-in-out';
  });

}

function scrollToNext() { // пролистывание впарво
  pos++;
  
  if (pos > cardsNumber/petsCardCount - 1) {
    sliderList.style.transition = null;

    sliderList.style.marginLeft = -(pos - 2) * slideWidth + 'px';

    let cloneElem;
    for (let i = 1; i <= petsCardCount; i ++) {
        cloneElem = sliderList.children[0].cloneNode(true);  
        cloneElem.addEventListener('click', showActivePopup);
        sliderList.appendChild(cloneElem);
        sliderList.removeChild(sliderList.children[0]);
    }

    pos--;
  }
  
  setTimeout(function() {
    sliderList.style.marginLeft = -(slideWidth * pos) + 'px';
    sliderList.style.transition = 'margin-left 0.6s ease-in-out';
  });
}


// ---------POPUP---------------------------------------------------------------------

// создание карточек по шаблону

function generatePopupPetsCardNode(img, name, breed, description, age, newId){
    let petsCardTemplate = document.getElementById('pets-card-popup-template');
    let newPetsCard = petsCardTemplate.cloneNode(true);

    newPetsCard.getElementsByTagName('img')[0].src = img;
    newPetsCard.id = '';

    newPetsCard.getElementsByTagName('h3')[0].innerHTML = name;
    newPetsCard.getElementsByTagName('h4')[0].innerHTML = breed;
    newPetsCard.getElementsByTagName('h5')[0].innerHTML = description;
    newPetsCard.getElementsByClassName('age')[0].innerHTML = age;
    newPetsCard.id = newId;

    return newPetsCard;
}

  
let popupPetsCardBg = document.querySelector('.pets-card-popup-bg'); // Фон попап окна
let popupPetsCard = document.querySelector('.pets-card-popup'); // Само окно
let openPopupPetsCardButtons = document.querySelectorAll('.pets-card'); // Кнопки для показа окна
let closePopupPetsCardButton = document.querySelector('.esc-pets-card-popup'); // Кнопка для скрытия окна


openPopupPetsCardButtons.forEach((button) => {
    button.addEventListener('click', showActivePopup)
});

function showActivePopup(e) { // Для каждой вешаем обработчик событий на клик
    e.preventDefault();

    let targetPetsCard = e.currentTarget;

    if (targetPetsCard.classList !== null && 'pets-card' === targetPetsCard.classList.value) {

      let popup_pets_card = document.querySelector('.content-pets-card-popup');
      popup_pets_card.innerHTML = '';
    
      let targetPetsCardObject = initPetsCard().find(function(currentPetsCard) {
            return currentPetsCard.newId === targetPetsCard.id;} );

      let currentPopupPetsCardNode = generatePopupPetsCardNode(targetPetsCardObject.img, targetPetsCardObject.name, targetPetsCardObject.breed, targetPetsCardObject.description, targetPetsCardObject.age, targetPetsCardObject.newId);
      popup_pets_card.appendChild(currentPopupPetsCardNode);

      popupPetsCardBg.classList.add('active'); // Добавляем класс 'active' для фона
      popupPetsCard.classList.add('active'); 
      document.body.style.overflow = "hidden";
    }
}

closePopupPetsCardButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupPetsCardBg.classList.remove('active'); // Убираем активный класс с фона
  popupPetsCard.classList.remove('active'); // И с окна
  document.body.style.overflow = ""; 
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupPetsCardBg) { // Если цель клика - фот, то:
      popupPetsCardBg.classList.remove('active'); // Убираем активный класс с фона
      popupPetsCard.classList.remove('active'); // И с окна
      document.body.style.overflow = ""; 
    }
});
