function submitUsername() {
    let username = document.getElementById("usernameInput").value;

    if (username == "") {
        document.getElementById("result").innerHTML = "Please enter a username.";
    } else if (username.length < 3) {
        document.getElementById("result").innerHTML = "Username must be at least 3 characters long.";
    } else if (username == "admin") {
        document.getElementById("result").innerHTML = "Logged in as admin.";
    } else {
        document.getElementById("result").innerHTML = "Invalid username.";
    }
    
}