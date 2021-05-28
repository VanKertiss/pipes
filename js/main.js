//Навигация
const modal = document.querySelector('.modalMap');
const buttonMapOpen = document.querySelector('.buttonForm');
const navLinks = ['Калькулятор', 'Услуги', 'наши новости', 'отзывы',
    'консультация', 'преимущества', 'производство', 'вопрос-ответ', 'контакты'
];

const render = () => {
    const renderNavLinks = document.querySelector('.nav');
    navLinks.map(item => renderNavLinks.insertAdjacentHTML('beforeEnd', `<b><a class="navLinks" href="#">${item.toUpperCase()}</a></b>`));
}

render();

const modalRender = () => {
    
}

buttonMapOpen.addEventListener('click', modalRender )