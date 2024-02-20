function createCookie() {
    let timeNow = new Date();

    timeNow.setTime(timeNow.getTime() + 5 * 24 * 60 * 60 * 1000)

    // let expires = "expires=" + timeNow.toUTCString();

    let atTime =  timeNow.toUTCString();

    let value = "MKM123k1jn2k3jnmakMkmmkm1k3m123km";

    document.cookie = `sessionToken=${value};expires=${atTime};path=/`


    // recieve cookie from server

    let cookie = document.cookie;

    // console.log(cookie.split(';')[0].split('=')[1]);

    let sessionToken = cookie.split('=');

    console.log(sessionToken,sessionToken[1]);
}