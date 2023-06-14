// ლოკალურ მეხსიერებაში ნებისმიერი სახის მნიშვნელობა ინახება ყოველთვის სტრიქონულ ფორმატში მაგ. მათემატ.რიცხვი ინახება სტრიქონში, მასივიც სტრიქონში და ა.შ

// [{"userName":"user1","password":"123123"},{"userName":"user2","password":"12312399998"},{"userName":"user3","password":"12312334234"},{"userName":"user4","password":"1234123"}]

let userDataFromDB = localStorage.getItem('userData');

userDataFromDB = JSON.parse(userDataFromDB);

let inputUsername = "user5";
let inputPassword = "113322";

userDataFromDB.push({"userName": inputUsername, "password": inputPassword});

userDataFromDB = JSON.stringify(userDataFromDB);

localStorage.setItem('userData', userDataFromDB);