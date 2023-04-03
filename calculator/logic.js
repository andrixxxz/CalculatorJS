let inputs = '';

function append(value) {
  inputs += value;
  document.getElementById('result').value = inputs;
}

function clearResult() {
  inputs = '';
  document.getElementById('result').value = inputs;
}

function calculate() {
  try {
    const result = eval(inputs);
    inputs = result
    document.getElementById('result').value = inputs;
  } catch (error) {
    alert('Invalid expression');
  }
}