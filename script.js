let currentInput = '';

function press(num) {
    currentInput += num;
    document.getElementById('display').value = currentInput;
}