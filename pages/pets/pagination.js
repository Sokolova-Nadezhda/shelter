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

    return [Jennifer, Katrine, Woody, Scarlet, Charly, Freddie, Sophia, Timmy];
}

let petsCardFree = initPetsCard();
let cardsContainer = document.getElementsByClassName('wrap-pets-cards')[0];

let pageWidth = document.documentElement.scrollWidth; // ширина страницы
    let petsCardCount = 4; // число видимых карточек
    let cardsNumber = 8; // общее число карточек
    let pageNumber = 6; // количество страниц
    let petsCardWidth = 270; // ширина одной карточки
    let gap = 40;
    let slideWidth = petsCardWidth * petsCardCount + gap * (petsCardCount - 1); // ширина одного слайда 

    // cardsContainer.style.width = petsCardWidth*petsCardCount*pageNumber + gap * (petsCardCount - 1) + 'px'; // ширина ленты с карточками

    function buildSliderList() {
        cardsContainer.innerHTML = '';
        petsCardFree = initPetsCard();
        pageWidth = document.documentElement.scrollWidth; // ширина страницы
        
        if (pageWidth > 1055) {
            petsCardCount = 4;
            cardsNumber = 8;
            pageNumber = 6;
            gap = 40;
        }
    
        if (pageWidth < 1240) {
            petsCardCount = 2;
            cardsNumber = 6;
            pageNumber = 8;
        }
    
        if (pageWidth < 600) {
            petsCardCount = 1;
            cardsNumber = 3;
            pageNumber = 16;
            gap = 0;
        }
        
        slideWidth = petsCardWidth * petsCardCount + gap * (petsCardCount - 1);
    
        let cloneWrapper;

        for (let k = 0; k < pageNumber; k ++) {
            petsCardFree = initPetsCard();
            cloneWrapper = cardsContainer.cloneNode(true);

            for (let i = 0; i < cardsNumber; i++){
                let randomNumber = Math.trunc(Math.random()*petsCardFree.length);
                let currentPets = petsCardFree[randomNumber];
            
                petsCardFree.splice(randomNumber, 1);
            
                let currentPetsNode = generatePetsCardNode(currentPets.img, currentPets.name, currentPets.newId);
                cloneWrapper.appendChild(currentPetsNode);
            }

            document.getElementsByClassName("cards-container")[0].appendChild(cloneWrapper);

        }

        document.getElementsByClassName('wrap-pets-cards')[0].style.display = 'none';
        
    }

    buildSliderList();

    let sliderList = document.querySelector('.cards-container'); // "лента" с карточками

    let btnDoublePrev = carousel.querySelector('.double-prev');
    let btnPrev = carousel.querySelector('.prev');
    let btnNext = carousel.querySelector('.next');
    let btnDoubleNext = carousel.querySelector('.double-next');

    let pageValue = document.getElementById('page-number').textContent;


    let pos = 0;

    btnPrev.onclick = scrollToPrev;
    btnNext.onclick = scrollToNext;

    btnDoublePrev.addEventListener('click',() => { // кнопка для перелистывания в начало
        sliderList.style.marginLeft = 0 + 'px';
        pageValue = '1'; 
        document.getElementById('page-number').getElementsByTagName('h4')[0].innerHTML = pageValue;

        btnPrev.setAttribute("disabled", "true");
        btnDoublePrev.setAttribute("disabled", "true");

        btnNext.removeAttribute("disabled", "false");
        btnDoubleNext.removeAttribute("disabled", "false");
        pos = 0;
    });

    btnDoubleNext.addEventListener('click',() => { // кнопка для перелистывания в конец
        sliderList.style.marginLeft = -(sliderList.offsetWidth - slideWidth) + 'px';
        pageValue = pageNumber.toString(); 
        document.getElementById('page-number').getElementsByTagName('h4')[0].innerHTML = pageValue;

        btnPrev.removeAttribute("disabled", "false");
        btnDoublePrev.removeAttribute("disabled", "false");

        btnNext.setAttribute("disabled", "true");
        btnDoubleNext.setAttribute("disabled", "true");

        pos = pageNumber - 1;
    });



    function scrollToPrev() { // пролистывание влево

        pos--;
        
        if (pos < 0) {
          sliderList.style.transition = null;
      
          sliderList.style.marginLeft = -(pos + 2) * slideWidth + 'px';
      
          pos++;
        }
        
        setTimeout(function() {
          sliderList.style.marginLeft = -(slideWidth * pos) + 'px';
          sliderList.style.transition = 'margin-left 0.6s ease-in-out';
        });

        pageValue = (Number(pageValue) - 1).toString();
        document.getElementById('page-number').getElementsByTagName('h4')[0].innerHTML = pageValue;

        if (pageValue <= pageNumber.toString()) {
            btnNext.removeAttribute("disabled", "false");
            btnDoubleNext.removeAttribute("disabled", "false");
        }

        if (pageValue == '1') {
            btnPrev.setAttribute("disabled", "true");
            btnDoublePrev.setAttribute("disabled", "true");
        }
    }

    function scrollToNext() { // пролистывание впарво
        pos++;
        
        if (pos > pageNumber) {
          sliderList.style.transition = null;
      
          sliderList.style.marginLeft = -(pos - 2) * slideWidth + 'px';
      
          pos--;
        }
        
        setTimeout(function() {
          sliderList.style.marginLeft = -(slideWidth * pos) + 'px';
          sliderList.style.transition = 'margin-left 0.6s ease-in-out';
        });

        pageValue = (Number(pageValue) + 1).toString();
        document.getElementById('page-number').getElementsByTagName('h4')[0].innerHTML = pageValue;

        if (pageValue == pageNumber.toString()) {
            btnNext.setAttribute("disabled", "true");
            btnDoubleNext.setAttribute("disabled", "true");
        }

        if (pageValue > '1') {
            btnPrev.removeAttribute("disabled");
            btnDoublePrev.removeAttribute("disabled");
        }
      }