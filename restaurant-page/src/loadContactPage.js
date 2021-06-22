const loadContactPage = () => {
    const container = document.getElementById('content');

    const title = document.createElement('h1');
    title.textContent = 'Contact';

    const address = document.createElement('h3');
    address.textContent = '55th Mario Street, Rome, Italy';

    const phone  = document.createElement('h4');
    phone.textContent = 'Reservations: 0039123123444';

    const email = document.createElement('h4');
    email.textContent = 'e-mail: chef@luigi.it';
    
    container.appendChild(title);
    container.appendChild(address);
    container.appendChild(phone);
    container.appendChild(email);
}

export default loadContactPage;