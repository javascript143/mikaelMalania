const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (password === 'Hellohello123') {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
});

class FormValidation {
    constructor() {
        this.pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        this.result = document.createElement('p');
        this.userChoice = document.querySelector('#password');
        this.userEmail = document.querySelector('#email');

        this.toBodyAppender = function (result) {
            document.body.appendChild(result);
        }
    }
    
    passwordChecker() {
        const password = this.userChoice.value;
    
        if (this.pattern.test(password)) {
            this.result.style.color = 'green';
            this.result.innerHTML = 'Password is valid';
        } else {
            this.result.style.color = 'red';
            this.result.innerHTML = 'Password is invalid';
        }
    
        this.toBodyAppender(this.result);
    }
    
    emailChecker() {
        const email = this.userEmail.value;
    
        if (this.pattern.test(email)) {
            this.result.style.color = 'green';
            this.result.innerHTML = 'email is valid';
        } else {
            this.result.style.color = 'red';
            this.result.innerHTML = 'email is invalid';
        }
    
        this.toBodyAppender(this.result);
    }
    
}

const formValidation = new FormValidation();

form.addEventListener('change', (event) => {
    event.preventDefault();
    formValidation.passwordChecker();
    formValidation.emailChecker();
});