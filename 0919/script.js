let user = {
  name: 'hong',
  age : 20
};

//추가 ㄱ능
user.addr = 'aa'

console.log(user)

user.hello =  function(){
  console.log('hello');
};

user.hello();

function hi() {
  console.log('hi');
};
user.hello = hi;
user.hello();

console.log(user)


user = {
  name : 'hong',
  msg() {
    console.log(this.name); //-----user.name 이라고 하면 user=null이라 했을 때 kim.msg()가 다르게 결과값을 냄
  }
};

user.msg();

console.log(user)

let kim = user;

user = null;
kim.msg

let lee = {
  name : 'lee',
  age : 20
};

let park = {
  name: 'park',
  age:30
}


function himsg(){
  console.log(this.name + "님 안녕하세요")
}

lee.fn = himsg;
park.fn = himsg;

lee.fn();
park.fn();

//DOM
//js는 html의 요구, 속성 추가,삭제 가능
//css 추가, 수정, 삭제 가능
//이벤트 추가, 수정 삭제 가능

// document.body.style.backgroundColor='red'