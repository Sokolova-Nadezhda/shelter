let popupBg = document.querySelector('.wrapper-popup-menu'); // Фон попап окна
let popup = document.querySelector('.popup-menu'); // Само окно
let openPopupButtons = document.querySelectorAll('.burger-menu'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.burger-menu-esc'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault();
        popupBg.classList.add('active-popup'); // Добавляем класс 'active' для фона
        popup.classList.add('active-popup'); 
        popup.classList.add('show-animation');
        popup.classList.remove('hide-animation');
        document.body.style.overflow = "hidden";

        closePopupButton.classList.add('show-animation');
        closePopupButton.classList.remove('hide-animation');
    })
});

function removeActive() {  // Функция для снятия активных классов с элементов
    popupBg.classList.remove('active-popup'); // Убираем активный класс с фона
    popup.classList.remove('active-popup'); // И с окна
    popup.classList.remove('show-animation');
    document.body.style.overflow = ""; 

    closePopupButton.classList.remove('show-animation');
}

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    setTimeout(removeActive, 1000);
    popup.classList.add('hide-animation');
    closePopupButton.classList.add('hide-animation');
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        setTimeout(removeActive, 1000);
        popup.classList.add('hide-animation');
        closePopupButton.classList.add('hide-animation');
    }
});

let navButtons = document.querySelectorAll('.burger-nav'); // элементы навигации в попап меню

navButtons.forEach((button) => { // для всех элементов навигации в меню
    button.addEventListener('click',() => {  // Вешаем обработчик на клик
            setTimeout(removeActive, 1000);
            popup.classList.add('hide-animation');
            closePopupButton.classList.add('hide-animation');
        });
});
