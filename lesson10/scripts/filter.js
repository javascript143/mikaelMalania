function searchContact() {
    let input, filter, ul, li, a, i, txtValue; // რამოდენიმე ცვალი შევქმენით ერთდროულად, რომლებსაც ქვევით კოდში გამოვიყენებთ, ჯერჯერობით მათი მნიშვნელობები არ მიგვითითებია რადგან ეს ქვევით უნდა მოხდეს

    input = document.getElementById("userInput"); // ამ ცვლადში ვიღებთ ინფორმაციას იმ ინფუთიდან
    filter = input.value.toUpperCase();
    ul = document.getElementById("contacts");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) { 
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText; // giorgi
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none"; 
        }
    }
}