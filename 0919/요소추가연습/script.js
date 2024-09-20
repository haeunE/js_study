let fruits = [
  {name : 'apple', memo:'빨간색'},
  {name : 'mango', memo:'달달함'},
  {name : 'melon', memo:'맛있다.'},
]

//let fruit in fruits
// for (let i=0; fruits.length; i++) {
//   document.querySelectorAll('.card-title')[i].innerHTML = fruits[i].name;
//   document.querySelectorAll('.card-text')[i].innerHTML = fruits[i].memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src',`./img/${fruits[i].name}.jpg`)
// } 
fruits.forEach((fruit) => {
  let item = `<div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./img/${fruit.name}.jpg" class="card-img-top">
          <div class="card-body">

            <h5 class="card-title">${fruit.name}</h5>
            <p class="card-text">${fruit.memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
      </div>`;

  // document.querySelector('.row').insertAdjacentHTML('beforeend',item)
  //jquary
  $('.row').append(item);
})
//버튼에 이벤트를 심는 방법(이벤트리스너)
// document.querySelectorAll('.cart')[0].addEventListener('click',() =>{
//   alert('클릭')
// })//(이벤트 ,콜백함수

$('.cart').on('click',(e) =>{
//let name = e.target.previousElementSibling.previousElementSibling(text)
  let name = $(e.target).siblings('h5').text();
  console.log(name);

  // let names = [name];//배열로 변환
  // let name_json = JSON.stringify(names);//json 으로 변환

  if(localStorage.getItem('name')!=null){
    //로컬스토리지에 있는 걸 빼와야 함
    let temp = localStorage.getItem('name')
    // 배열로 변환
    temp = JSON.parse(temp)
    let isHave = false;
    let index;

    temp.forEach((data,i)=>{ //i는 인덱스
      if(data.name === name) {
        isHave = true;
        index = i;
      }
    })
    if (isHave) {
      temp[index].cnt++;
    }else {
      temp.push({'name':name, 'cnt':1})
    }
    localStorage.setItem('name',JSON.stringify(temp))
    

  }else{
    localStorage.setItem('name',JSON.stringify([{'name' : name, 'cnt':1}]));
  }
})

// 클래스 명이 btn-remove인걸 클릭하면 
// 장바구니를 비우시겠습니까 모달창이 나타나고 
// 확인버튼을 누르면 로컬 스토리지가 삭제되도록 구현
document.querySelector('.btn-remove').addEventListener('click', () =>{
  if(confirm('장바구니를 비우시겠습니까?')){
    localStorage.removeItem('name')
  }
})



