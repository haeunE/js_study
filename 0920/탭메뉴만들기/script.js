// const tabBtns = document.querySelectorAll('.tab-button');
// const tabContents = document.querySelectorAll('.tab-contents');
// for(let i = 0; i<tabBtns.length;i++){
//   tabBtns[i].addEventListener('click', () => {
//     for(let i=0;i<tabBtns.length;i++){
//       tabBtns[i].classList.remove('select');
//       tabContents[i].classList.remove('select');
//     }
//     tabBtns[i].classList.add('select')
//     tabContents[i].classList.add('show')
//   })
// }

// const tabBtns = $('.tab-button');
// const tabContents = $('.tab-content')

// $(tabBtns).on('click', (e) => {
//   $(tabBtns).removeClass('select');
//   $(tabContents).removeClass('show');

//   let i = e.target.dataset.num;
//   $(tabBtns).eq(i).addClass('select');
//   $(tabContents).eq(i).addClass('show');
// })

const tabBtns = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const tabBtnBox = document.querySelector('.list')
tabBtnBox.addEventListener('click', (e) => { ///여기에서의 e는 tabBtnBox를 가리키는 객체가 아니라 클릭하는 공간(객체, 즉 li)를 가리킨다
  let i = e.target.dataset.num;

  removeClass();
  tabBtns[i].classList.add('select');
  tabContents[i].classList.add('show')
})

function removeClass(){
  for(let i=0; i<tabBtns.length;i++){
    tabBtns[i].classList.remove('select');
    tabContents[i].classList.remove('show');
  }
}