const loadNavBar = () => {
     const nav = document.createElement('nav');
     const linkList = document.createElement('li');

     const homeLink = document.createElement('span');
     homeLink.setAttribute('id', 'homeLink');
     homeLink.textContent = 'Home';

    const menuLink = document.createElement('span');
    menuLink.setAttribute('id', 'menuLink');
    menuLink.textContent = 'Menu';

    const contactLink = document.createElement('span');
    contactLink.setAttribute('id', 'contactLink');
    contactLink.textContent = 'Contact';
    
     linkList.appendChild(homeLink);
     linkList.appendChild(menuLink);
     linkList.appendChild(contactLink);
     nav.appendChild(linkList);
    document.body.appendChild(nav);
};

export default loadNavBar;