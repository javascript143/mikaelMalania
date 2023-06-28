const form = document.querySelector('form');
const userChoice = document.querySelector('#password');
const userEmail = document.querySelector('#email');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (password === 'Hellohello123') {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});

function passwordChecker() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const password = userChoice.value;

    let result = document.createElement('p');

    if (pattern.test(password)) {
        result.style.color = 'green';
        result.innerHTML = 'Password is valid';
    } else {
        result.style.color = 'red';
        result.innerHTML = 'Password is invalid';
    }

    document.body.appendChild(result);
}

function emailChecker() {
    const pattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+$/;
    const email = userEmail.value;

    let result = document.createElement('p');

    if (pattern.test(email)) {
        result.style.color = 'green';
        result.innerHTML = 'email is valid';
    } else {
        result.style.color = 'red';
        result.innerHTML = 'email is invalid';
    }

    document.body.appendChild(result);
}
