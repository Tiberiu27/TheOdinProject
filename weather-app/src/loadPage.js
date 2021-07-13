import loadData from "./loadData.js";


const loadDOM = (() => {
    let isCelsius = false;
    let name, temp, description, icon;

    const loadNav = () => {
        const mainContainer = document.getElementById('mainContainer');
        const navBar = document.createElement('nav');
    
        mainContainer.appendChild(navBar);

        loadSearchField();
        loadToggleButton();
    };

    const loadSearchField = () => {
        const navBar = document.getElementsByTagName('nav')[0];
        const searchField = document.createElement('div');
        searchField.setAttribute('id', 'searchField')

        const inputField = document.createElement('input');
        inputField.setAttribute('type', 'text');
        inputField.setAttribute('id', 'inputField');
        inputField.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('searchButton').click();
            }
        })

        const searchButton = document.createElement('span');
        searchButton.classList.add('material-icons-outlined');
        searchButton.setAttribute('id', 'searchButton');
        searchButton.textContent = 'search';
        searchButton.addEventListener('click', () => {
            if (inputField.value) {
                loadData.fetchData(inputField.value).then((data) => {
                    if (data.cod === "404") {
                        alert("Oops! Seems that we can't find that city");
                        return;
                    }
                    name = data.name;
                    temp = data.main.temp;
                    description = data.weather[0].description;
                    icon = data.weather[0].icon;


                    document.getElementById('buttonContainer').style.opacity = 1;
                    loadContent(name, temp, description, icon);
                });
            }
            inputField.value = '';
        });

        searchField.append(inputField, searchButton);
        navBar.appendChild(searchField);
    }

    const loadToggleButton = () => {
        const navBar = document.getElementsByTagName('nav')[0];

        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('id', 'buttonContainer');
        buttonContainer.textContent = 'Celsius';

        const labelElement = document.createElement('label');
        labelElement.classList.add('switch');

        const inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'checkbox');
        inputElement.setAttribute('id', 'inputElement');
        inputElement.addEventListener('click', (e) => {
            if (e.target.checked) {
                isCelsius = true;
                loadContent(name, temp, description, icon);
            } else {
                isCelsius = false;
                loadContent(name, temp, description, icon);
            }
        })

        const spanElement = document.createElement('span');
        spanElement.classList.add('sliderRound');

        labelElement.append(inputElement, spanElement);
        buttonContainer.append(labelElement)
        navBar.appendChild(buttonContainer);
    }

    const loadContent = (name, currentTemp, description, icon) => {

        const mainContainer = document.getElementById('mainContainer');

        if(document.getElementById('content')) {
            document.getElementById('content').remove();
        }

        const content = document.createElement('div');
        content.setAttribute('id', 'content');

        const contentCard = document.createElement('div');
        contentCard.setAttribute('id', 'contentCard');

        const cityName = document.createElement('h1');
        cityName.textContent = name;
        console.log(name);

        const temperature = document.createElement('h3');
        temperature.textContent = isCelsius ? `${(currentTemp - 273.15).toFixed(1)} Celsius` : `${currentTemp.toFixed(1)} Fahrenheit`;

        const condition = document.createElement('h3');
        condition.textContent = `${description}`;

        const weatherIcon = document.createElement('img');
        weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        changeBackground(description);

        contentCard.append(cityName, temperature, condition, weatherIcon);
        content.appendChild(contentCard);
        mainContainer.appendChild(content);

    }

    const changeBackground = (description) => {
        const content = document.getElementById('mainContainer');

        switch(description) {
            case 'clear sky':
                content.style.background = 'radial-gradient(circle, rgba(238,249,17,1) 0%, rgba(224,231,16,1) 35%, rgba(0,255,241,1) 100%)';
                document.getElementById('buttonContainer').style.color = 'black';
                return;
            case 'scattered clouds': case 'few clouds': case 'overcast clouds':
                content.style.background = 'radial-gradient(circle, rgba(233,244,16,1) 0%, rgba(90,91,76,1) 35%, rgba(6,44,129,1) 100%)';
                document.getElementById('buttonContainer').style.color = 'white';
                return;
            case 'shower rain': case 'rain':
                content.style.background = 'radial-gradient(circle, rgba(102,107,5,1) 0%, rgba(76,90,91,1) 35%, rgba(6,44,129,1) 100%)';
                document.getElementById('buttonContainer').style.color = 'white';
                return;
            case 'snow':
                content.style.background = 'radial-gradient(circle, rgba(234,236,190,1) 0%, rgba(197,240,236,1) 35%, rgba(255,255,255,1) 100%)';
                document.getElementById('buttonContainer').style.color = 'black';
                return;
            
        }
    }


    return {
        loadNav,
        loadContent
    }
})();



export default loadDOM;