let display = document.querySelector("#display");


function appendNum(number) {
    display.value += number;
}

function appendOper(operator) {
    display.value += operator;
}


function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}