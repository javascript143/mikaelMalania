let birthYear = 2000;

let person = {
    name: 'giorgi',
    birthYear: 1995,
    age: function() {
        return 2023 - this.birthYear;
    }
}

