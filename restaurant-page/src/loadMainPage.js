import loadNavBar from "./loadNavBar";

const loadHead = () => {
    const head = document.querySelector('head');
    const title = document.createElement('title');
    const link = document.createElement('link');

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "style.css");
    title.textContent = "Luigi's Pizzeria";
    
    head.appendChild(title);
    head.appendChild(link);
    loadNavBar();
}

const loadMainPage = () => {
    const mainTextLines = [
        'Pizza, dish of Italian origin consisting of a flattened disk of bread dough',
        'topped with some combination of olive oil, oregano, tomato, olives, mozzarella',
        'or other cheese, and many other ingredients, baked quickly-usually, in a commercial',
        'setting, using a wood-fired oven heated to a very high temperature and served hot.',
    ];

    const loadBody = () => {
        const container = document.getElementById('content');
        const title = document.createElement('h1');

        title.textContent = "Luigi's Pizzeria";

        container.appendChild(title);

        mainTextLines.forEach(line => {
            const mainTextLine = document.createElement('p');
            mainTextLine.textContent = line;
            container.appendChild(mainTextLine);
        });

    }

    loadBody();
};

export  { loadMainPage, loadHead };