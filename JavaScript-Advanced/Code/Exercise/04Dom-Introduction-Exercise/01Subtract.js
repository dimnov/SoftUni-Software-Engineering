function subtract() {
    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;
    const resultDiv = document.getElementById('result');

    const result = Number(firstInput) - Number(secondInput);
    resultDiv.textContent = result;
}