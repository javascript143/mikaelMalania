function readFileAsync(path, callback) {
    // ფაილის ასინქრონულად წაკითხვის სიმულაცია
    setTimeout(() => {
        const content  ="File content";
        callback(content);
    }, 1000);
}

readFileAsync("/files/file.txt", (error, content) => {
    if (error) { // null ნიშნავს ცარიელ სიმრავლეს
        console.log(error);
        return;
    }
    console.log(content);
});