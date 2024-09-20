const ab = document.getElementById('ad');

function show() {
  ab.style.display = 'black'

}

function hide() {
  ab.style.display = 'white'
}

const alertBox = document.querySelectorAll('.alert-box')[1];

function showBox(msg){
  // js문법
  // document.querySelectorAll('.alert-box')[1].style.display('block')
  // document.querySelectorAll('.alert-box')[1].innerHTML = msg

  // jQuery 문법
  $('.alert-box').eq(1).css('display','block');
  $('.alert-box').eq(1).html(msg)
}

function closeBox(){
  
}