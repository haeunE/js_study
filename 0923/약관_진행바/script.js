const boxY = box.scrollHeight;
const boxHeigtht = box.clientheight;
conseole.log('box총높이',boxY);
console.log('box크기 높이',boxHeigtht)
.sDisabled = true;

box.addEventListener('scroll', () => {
  
  let scroll = box.scrollTop;
  if(disabled && scroll+boxHeigtht>boxY-5){
    document.querySelector('#chk').disabled = false;
    console.log('마지막까지 내림')
    .sDisabled = false
  }
})

//화면 높이
console.log(window.innerHeight);
let windowY = window.innerHeight
//body태그 높이
console.log(document.body.clientHeight)
let bodyY = document.body.clientHeight

window.addEventListener('scroll', () => {
  console.log(windw.scrollY)
  let scrollY = window.scrollY
  let status = scrollY / (bodyY - windowY)*100
  document.querySelector('.status-bar').computedStyleMap.width = `${status}%`
})