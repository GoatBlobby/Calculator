document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');

  display.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
      // Remove the last character from the display value
      display.value = display.value.slice(0, -1);
    }
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === '=') {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (button.textContent === 'C') {
        display.value = '';
      } else if (button.textContent === '√') {
        display.value += 'Math.sqrt(';
      } else if (button.textContent === 'x²') {
        display.value += '**2';
      } else if (button.textContent === 'x³') {
        display.value += '**3';
      } else if (button.textContent === '1/x') {
        display.value = `1/(${display.value})`;
      } else if (button.textContent === 'x^') {
        display.value += '**';
      } else {
        display.value += button.textContent;
      }
    });
  });
});
