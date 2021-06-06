// !  Добавь функционал изменения темы при нажатии
// !  (событие change) на чекбокс #theme -switch-toggle в тулбаре.

// ?  По умолчанию тема светлая.
// ?  При изменении темы, необходимо добавлять на элемент body класс
// ?  light - theme или dark - theme.
// ?  Выбранная тема должна сохраняться между перезагрузками страницы.
// ?  Для хранения темы используй localStorage.
// ?  Если при загрузке страницы тема тёмная, не забудь поставить
// ?  свойство checked у чекбокса #theme -switch-toggle в true,
// ?  чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const bodyEl = document.querySelector('body');
const toggleEl = document.querySelector('#theme-switch-toggle');

let STORAGE_KEY = 'installedTheme';

// добавляет тему по умолчанию
bodyEl.classList.add(Theme.LIGHT);


toggleEl.addEventListener('click', onSwitchesThemes);



// функция изменения темы
function onSwitchesThemes(event) {
    bodyEl.classList.toggle(Theme.DARK);
    bodyEl.classList.toggle(Theme.LIGHT);
    
 //  записываем текущую тему в localStorage
    localStorage.setItem(STORAGE_KEY , Theme.DARK)
    if (!toggleEl.checked) {
    localStorage.setItem(STORAGE_KEY , Theme.LIGHT);
    } 
};

// сохраняет включенную тему и устанавливает чекбокс
function keepsTheInstalledTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
        bodyEl.classList.value = savedTheme;
        if (savedTheme === Theme.DARK) {
            toggleEl.checked = true;
        }
    } 
}

keepsTheInstalledTheme();
