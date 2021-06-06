import food from './menu.json';
import menuItemTemplate from '../templates/menu-item.hbs';

const menuEl = document.querySelector('.menu');
const foodMenuEl = createFoodMenu(food);

menuEl.insertAdjacentHTML('beforeend', foodMenuEl);

function createFoodMenu(food) {
 return food.map(menuItemTemplate).join('');   
}
