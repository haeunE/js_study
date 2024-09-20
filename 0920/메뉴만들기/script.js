const hamBtn = document.querySelector('.navbar-toggler')
hamBtn.addEventListener('click', ()=> {
  //js
  // document.querySelector('.list-group').classList.toggle('show')
  //jQuery
  $('.list-group').toggleClass('show');
});

document.querySelector('#write').addEventListener('click', () =>{
  document.querySelector('.black-bg').classList.add('visi');
  
})

$('#close').on('click', ()=> {
  $('.black-bg').removeClass('visi');
})

const modeBtn = document.querySelector('#mode')
modeBtn.addEventListener('click', ()=>{
  document.querySelector('.main').classList.toggle('dark')
  // document.body.classList.toggle('dark')

  if(modeBtn.value == "다크모드"){
    modeBtn.value = "라이트모드"
  }else{
    modeBtn.value = "다크모드"
  }
})