// 정규식 조건
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

const idCheck = document.querySelector('.id')

const idInput = document.querySelector('#id_txt');
const pwInput = document.querySelector('#pw_txt');
const emailInput = document.querySelector('#email_txt')
const phoneInput = document.querySelector('#phone_txt');

idBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(idInput.value);
})

