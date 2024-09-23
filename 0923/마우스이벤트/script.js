document.querySelector('.btn').addEventListener('mousedown', (e) => {
  console.log(e.button)
})

// document.body.addEventListener('mousemove', (e)=>{
//   console.log('clientX', e.clientX)
//   console.log('clienty', e.clientX)
//   console.log('pageX', e.pageX)
//   console.log('pageY', e.pageY)
// })



document.querySelector('user.name').addEventListener('input', () =>{
  console.log('변경됨')
})

// change 변경(포커스 잃은 후 실행)
// input 변경될때마다 실행
// copy 복사하기
// paste 붙여넣기
// cut 잘라내기