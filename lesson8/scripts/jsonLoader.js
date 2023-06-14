async function loadData() {

    let jsonLoader = await fetch("/sample.json"); // ჩავტვირთეთ sample.json ფაილი

    let jsonResult = await jsonLoader.json(); // გადავიყვანეთ ჩატვირთული ფაილი Json ფორმატში

    // გამოვიტანეთ შედეგი ეკრანზე
    // console.log(jsonLoader);
    // console.log(jsonResult);

    // let userPromt = prompt("Enter Json data");
    
    // // ამ ფუნქციას (JSON.parse()) გადაყავს სტრონულ ფორმატში არსებული JSON-ი, JSON-ფორმატად.
    // let parsedUserPromt = JSON.parse(userPromt); 

    // console.log(parsedUserPromt.name)

    // JSON.stringify()-ის გადაყავს JSON ფორმატი, სტრიქონულ ფორმატის მონაცემში
    let jsonInStr = JSON.stringify(jsonResult);
    console.log(jsonInStr);
} 

loadData();