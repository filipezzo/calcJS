const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];


input.addEventListener('keydown', (ev) => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return
  }

  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }

  if (ev.key === 'Enter') {
    calculate();
  }
})

function calculate() {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error');

  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove('error');
}

document.querySelectorAll('.charKey').forEach((charBtn) => {
  charBtn.addEventListener('click', () => {
    const value = charBtn.dataset.value;
    input.value += value;
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.value = '';
  input.focus();
})

document.getElementById('equal').addEventListener('click', calculate);

document.getElementById('themeSwitcher').addEventListener('click', () => {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#DDD');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--border-color', '#212529');
    root.style.setProperty('--primary-color', '#0000FF')
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--font-color', '#f1f5f9');
    root.style.setProperty('--border-color', '#666');
    root.style.setProperty('--primary-color', 'lightblue')
    main.dataset.theme = 'dark';
  }
})

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!';
    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value); //comando para copiar o resultado
  } else {
    button.innerText = 'Copy';
    button.classList.remove('sucess');

  }
})