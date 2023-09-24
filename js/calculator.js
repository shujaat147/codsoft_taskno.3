let displayValue = '0';

function clearDisplay() {
 displayValue = '0';
 updateDisplay();
}

function appendToDisplay(value) {
 if (displayValue === '0') {
  displayValue = value;
 } else {
  displayValue += value;
 }
 updateDisplay();
}

function calculate() {
 try {
  displayValue = eval(displayValue).toString();
  updateDisplay();
 } catch (error) {
  displayValue = 'Error';
  updateDisplay();
 }
}

function updateDisplay() {
 document.getElementById('display').innerText = displayValue;
}

updateDisplay();
