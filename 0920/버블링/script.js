document.querySelector('a').addEventListener('click',(e)=>{
  e.preventDefault();//기본동작막기
  e.stopPropagation();//버블링막기
  alert('a태그')
})