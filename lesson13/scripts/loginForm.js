import { generateString, hello } from './stringGenerator.js';

function handleLogin() {
    let savePasswordIsChecked = document.getElementById('savePassword').checked;
    let loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let usersData = localStorage.getItem('usersData');
    usersData = JSON.parse(usersData);

    let userExists = false;

    let timeNow = new Date();

    timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000)

    let atTime =  timeNow.toUTCString();

    for (let user = 0; user < usersData.length; user++) {
        if (usersData[user].username === username && usersData[user].password === password) {
            let sessionToken = generateString(36);

            if (savePasswordIsChecked) {
                document.cookie = `sessionToken=${sessionToken};expires=${atTime};path=/`
            } else {
                sessionStorage.setItem('sessionToken', sessionToken);
            };

            usersData[user].sessionToken = sessionToken;
            userExists = true;
        };
    };

    if (userExists) { 
        window.location.href = './loginSuccess.html';
    }
    else {
        window.location.href = './loginFailed.html';
    }

};
