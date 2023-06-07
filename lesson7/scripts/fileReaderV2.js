function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => { 
            const content = event.target.result;
            resolve(content);
        };

        reader.onerror = (event) => {
            reject(event.target.error);
        };

        if (file.type.startsWith("text")) {
            reader.readAsText(file);
        } else if (file.type.startsWith("image")) {
            reader.readAsDataURL(file);
        } else {
            reject("Unsupported file type: " + file.type);
        }
        
    });
}

function displayImage(content, width, height) {
    const output = document.getElementById("output");
    output.innerHTML = `<img width=${width}; height=${height}; src="${content}" alt="image" />`; // template string
}

function handleFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    const output = document.getElementById("output");

    if (!file) { // undefined, null, 0, "", NaN, false ==> ნიშნავს პირობის არ შესრულებას
        output.style.color = "red";
        output.innerHTML = "Error: No file selected!";
        return; // აქ წყდება ფუნქციის მუშაობა
    }

    readFileAsync(file).then((fileContent) => {
        if (file.type.startsWith("text")) {
            output.innerHTML = fileContent;
        } else if (file.type.startsWith("image")) {
            displayImage(fileContent, 360, 240);
        }
    }).catch((error) => {
        output.style.color = "red";
        output.innerHTML = "Error: " + error;
    });
}