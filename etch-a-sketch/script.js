const body = document.querySelector('body');
const head = document.querySelector('head');

const container = document.createElement('div');
container.id = "container";

//generate random rgb color
const randomRGB = () => {
   let red = Math.floor(Math.random() * 256);
   let green = Math.floor(Math.random() * 256);
   let blue = Math.floor(Math.random() * 256);

   return `rgb(${red}, ${green}, ${blue})`
};

function generateGrid(numberOfItemsOnRow) {
    for(let i = 0; i < numberOfItemsOnRow * numberOfItemsOnRow; i++) {
        const item = document.createElement('div');
        item.className = "item";
        item.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = randomRGB();
        });
        container.appendChild(item);

        container.style.gridTemplateColumns = "auto ".repeat(numberOfItemsOnRow);
    }
}

generateGrid(10);

function newGrid() {
    let userInput = prompt("enter new value");

    if (!Number.parseInt(userInput) || userInput > 100) {
        return;
    }

    container.innerHTML = '';
    generateGrid(userInput);
}

const button = document.createElement('button');
button.textContent = "Create new grid";
button.addEventListener('click', newGrid);



body.appendChild(button);
body.appendChild(container);

//adding styles.css to DOM
const link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "styles.css");
head.appendChild(link);