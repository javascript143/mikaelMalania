function one() {
    let number1 = document.getElementById("1").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number1;
}

function two() {
    let number2 = document.getElementById("2").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number2;
}

function three() {
    let number3 = document.getElementById("3").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;
    document.getElementById("calcDisplay").value = oldDisplayValue + number3;
}

function plus() {
    let plus = document.getElementById("plus").innerHTML;
    let oldDisplayValue = document.getElementById("calcDisplay").value;

    if (oldDisplayValue == "") { // same as oldDisplayValue.length == 0
        return;
    }


    count = 0;
    for (let char of oldDisplayValue) {
        if (char == "+") {
            count++; // same as count = count + 1
        }
    }

    if (count > 0) {
        return;
    }

    document.getElementById("calcDisplay").value = oldDisplayValue + plus;
}

function equal() {
    let oldDisplayValue = document.getElementById("calcDisplay").value;

    if (oldDisplayValue.includes("+")) {
        let numbers = oldDisplayValue.split("+");

        let sum = 0;

        for (let number of numbers) {
            sum = sum + parseInt(number);
        }

        document.getElementById("calcDisplay").value = sum;        
    }

}