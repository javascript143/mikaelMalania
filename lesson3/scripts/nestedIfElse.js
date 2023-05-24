// nested if else example

let waterStorage = 'full';
let carrayWater = true;
let connectToSink = true;

if (waterStorage == 'full') {
    if (carrayWater == true) {
        if (connectToSink == true) {
            alert('Task completed');
        } else if (connectToSink == false) {
            alert('Please connect water bank to sink');
        } else {
            alert('Task not completed');
        }
    } else if (carrayWater == false) {
        alert('Please carray water');
    } else {
        alert('Task not completed');
    };
} else if (waterStorage == 'empty') {
    alert('Please fill water bank');
} else {
    alert('Task not completed');
}

