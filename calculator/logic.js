let expression = '';

function append(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('result').value = expression;
  } catch (error) {
    alert('Invalid expression');
  }
}