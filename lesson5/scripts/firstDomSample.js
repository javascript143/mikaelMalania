let welcomeText = document.getElementById("welcomeText").innerHTML;

if (welcomeText == "Welcome to my page") {
    document.getElementById("welcomeText").innerHTML = "Goodbye dear visitor!";
}

let helloText = document.getElementsByClassName("helloText")[0].innerHTML;

if (helloText.includes("Tika")) {
    document.getElementsByClassName("helloText")[0].innerHTML = "Hello dear Tika!";
    document.getElementsByClassName("helloText")[0].style.color = "red";
}
