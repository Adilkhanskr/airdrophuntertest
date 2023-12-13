const navbar = document.querySelector('.navbar');
const slider = document.querySelector('.slider');
const navItems = document.querySelectorAll('.nav-item');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');
const otherContent = document.querySelector('.other-content');
const items = Array.from(navItems).map(item => item.innerHTML);

// Функция для переключения элементов
function toggleItems(direction) {
    if (direction === 'left') {
        const movedItem = items.pop();
        items.unshift(movedItem);
    } else if (direction === 'right') {
        const movedItem = items.shift();
        items.push(movedItem);
    }
    renderItems();
}

// Функция для отображения элементов в slider
function renderItems() {
    slider.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `<a href="#">${item}</a>`;
        slider.appendChild(li);
    });
}

// Добавим обработчики событий на кнопки
scrollLeftBtn.addEventListener('click', () => {
    toggleItems('left');
});

scrollRightBtn.addEventListener('click', () => {
    toggleItems('right');
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }