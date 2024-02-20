const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (event) => {
    console.log(nameInput.checkValidity('bobo'));
    if (!nameInput.checkValidity('asdasd')) {
        console.log('Please enter a valid name');
    }
    event.preventDefault();
});