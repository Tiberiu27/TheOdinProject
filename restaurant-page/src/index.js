import { loadHead, loadMainPage } from "./loadMainPage";
import loadMenuPage from './loadMenuPage';
import loadContactPage from './loadContactPage';

loadHead(); //this should be here so the navBar is loaded
window.onload = () => {
    switchTab('homeLink'); //first tab selection
}

const links = document.querySelectorAll('span');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        switchTab(e.target.id);
    });
}

const switchTab = (tab) => {
    const container = document.getElementById('content');
    container.innerHTML = '';
    switch (tab) {
        case 'homeLink':
            loadMainPage();
            return;
        case 'menuLink':
            loadMenuPage();
            return;
        case 'contactLink':
            loadContactPage();
            return;
    };
};

