function readFileAsyncUsingPromises(path) {
    return new Promise((resolve, reject) => { // new is keyword that is used to create an instance of an object
        // ფაილის ასინქრონულად წაკითხვის სიმულაცია
        setTimeout(() => {
            const content = "File content";
            resolve(content);
        }
        , 1000);
    });
}

readFileAsyncUsingPromises('/files/file.txt').then((content) => {
    console.log("Content: " + content);
}).catch((error) => {
    console.error(error);
});