const createMenuList = (container) => {
    const menu = [
        {
            name: 'Round Pizza',
            price: 22,
            image: 'roundPizza',
            ingredients: ['flower', 'ham', 'potatos', 'lemon'],

        },
        {
            name: 'Hot Pizza',
            price: 24,
            image: 'hotPizza',
            ingredients: ['jalapenos', 'pepperoni'],
        },
        {
            name: 'Ice Pizza',
            price: 16,
            image: 'icePizza',
            ingredients: ['tuna', 'icecream', 'ginger'],
        },
        {
            name: 'Exotic Pizza',
            price: 25,
            image: 'exoticPizza',
            ingredients: ['pineapple', 'mango', 'bananas', 'dragonfruit'],
        }
    ];

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');

    menu.forEach((item) => {
        const pizza = document.createElement('div');
        pizza.setAttribute('id', item.image);
        pizza.setAttribute('class', 'pizzas');
        const title = document.createElement('h3');
        title.textContent = item.name;
        const image = document.createElement('img');
        image.setAttribute(`src`, `../assets/${item.image}.png`);
        const price = document.createElement('p');
        price.textContent = `$${item.price}`
        const ingredients = document.createElement('p');
        ingredients.textContent = item.ingredients.join(' ');

        pizza.appendChild(title); 
        pizza.appendChild(image);
        pizza.appendChild(price);
        pizza.appendChild(ingredients);
        menuContainer.appendChild(pizza);

    });
    container.appendChild(menuContainer);
}


const loadMenuPage = () => {
    const container = document.getElementById('content');
    const title = document.createElement('h1');
    title.textContent = 'Menu';

    container.appendChild(title);
    createMenuList(container);
}

export default loadMenuPage;