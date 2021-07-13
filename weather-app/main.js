import loadData from "./src/loadData.js";
import loadDOM from "./src/loadPage.js";

document.addEventListener('DOMContentLoaded', () => {
    loadDOM.loadNav();
    loadDOM.loadContent('London', 300, 'clear sky', '10n');
});
