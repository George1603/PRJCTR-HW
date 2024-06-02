'use strict'

/*Задача на обробники подій, роботу зі сховищами та атрибутами/вмістом
Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
В початковому стані — на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
Після натиснення — на кнопці має бути текст 'Turn on', фон сторінки має стати темний. 
Під кнопкою має з'явитись текстове повідомлення 'Last turn off: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення
Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
Під кнопкою має з'явитись текстове повідомлення 'Last turn on: {DD-MM-YYYY HH:MM:SS}', де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення
Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки (localStorage).*/

const mainBtn = document.querySelector('#main-btn');
const sectionColor = document.querySelector('.first-section');
let storage = localStorage.getItem('Date storage') || 0;

function colorChanger (elem) {
    
    if (elem.style.background === 'grey') {
        elem.style.background = 'white';
    } else {
        elem.style.background = 'grey';
    }
    let event = new CustomEvent ('colorchanger', {
        detail: {
            background: 'grey'
        }
    });
    elem.dispatchEvent(event);
};

mainBtn.addEventListener('click', () => {
    colorChanger(sectionColor)
    let dateDiv = document.querySelector('#ClickTimeDiv');
    let clickTime = new Date();
    function gettingCurrentDate(token) {
        return ("0" + token).slice(-2)
    }
    let year = clickTime.getFullYear(),
        month = gettingCurrentDate(clickTime.getMonth() + 1),
        day = gettingCurrentDate(clickTime.getDate()),
        hours = gettingCurrentDate(clickTime.getHours()),
        minutes = gettingCurrentDate(clickTime.getMinutes()),
        seconds = gettingCurrentDate(clickTime.getSeconds());    
    let result = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    if (mainBtn.textContent === 'Turn off') {
        mainBtn.textContent = 'Turn on';              
        dateDiv.textContent = `Last turn off: ${result}`;       
        localStorage.setItem(`Last turn off: `, result);
    } else {
        mainBtn.textContent = 'Turn off';                
        dateDiv.textContent = `Last turn on: ${result}`;
        localStorage.setItem(`Last turn on: `, result);
    };
});

// localStorage.clear();
