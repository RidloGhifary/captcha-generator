function Captcha() {
  const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  let code = '';
  for (let i = 0; i < 7; i++) code += array[Math.floor(Math.random() * array.length)];
  document.querySelector('.mainDisplayText').innerHTML = code;
  document.getElementById('inputText').value = ''
}

function refreshCaptcha() {
  document.querySelector('.errorText').classList.add('hidden')
  Captcha()
}

function submitCaptcha() {
  let userInput = document.getElementById('inputText').value;
  const captchaCode = document.querySelector('.mainDisplayText').innerHTML
  let infoText = document.querySelector('.errorText')

  if (userInput === captchaCode) {
    userInput = ''
    infoText.classList.remove('hidden')
    infoText.style.color = 'greenyellow'
    infoText.innerHTML = '!Captcha is Correct'
    Captcha()
  } else {
    userInput = ''
    infoText.classList.remove('hidden')
    infoText.style.color = 'red'
    infoText.innerHTML = '!Captcha is InCorrect'
    Captcha()
  }
}