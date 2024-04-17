let currentInput = '';

function press(num) {
    currentInput += num;
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}