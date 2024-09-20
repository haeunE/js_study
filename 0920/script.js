// 해당요소.addEventLisner('이벤트 종류', 콜백함수)
function showModal(){
  alert('모달창 나타남')
}
const btn = document.querySelector('.btn')
// btn.addEventListener('click',showModal)
// btn.removeEventListener('click',showModal);

btn.addEventListener('click', () => {
  alert('알림창')
})

//이벤트 객체

btn.addEventListener('click',(e)=>{
  console.log(e.type);
  console.log(e.currentTarget);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
})