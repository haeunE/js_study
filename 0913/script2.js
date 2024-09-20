//함수
// function 함수이름() {
// 함수 실행코드}

function msg() {
  let message = '안녕하세요';
  console.log(message);
}

function add (num1,num2){
  return num1+num2
}

console.log(add(10,30))

// 함수표현식 - 그냥 함수는 위 아래 순서 없이 만들어져도 사용가능하지만 
// 함수 표현식은 변수에 함수를 선언하는 방식이라 호출코드가 위에 있으면 함수를 호출 할 수 없다(선언이 안되어 있기에)

let mul = function(num1, num2){
  return num1 * num2;
}
console.log(mul(10,20))

let age = 20;

//콜백 함수
function yesOrNo(yes,no){
  if (confirm('예 아니오 선택'))
    yes()

  else
    no();
}
function ok(){
  console.log("오케이")
}
function cancel(){
  console.log("노")
}


//화살표 함수(람다함수)
let sum = (num1,num2) =>{
  return num1+num2;
}

console.log(sum(10,20))


//자바스크립트의 상수는 다른 언어들과 개념자체가 다르다. 
//주소값을 바꿀 수 없는 거지 내용은 언제든지 바꿀 수 있다. 
const user = {
  name:'홍길동',
  age : 20
}

let str = 'name'
console.log(user[str])


str = 'lang'

let study = {
  [str]:'java'
}
console.log(study)

function mkObject (name, age) {
  return {
    name:name,   //   name,
    age:age      //== age       <= 이 형식도 가능
  }
}

let hong = mkObject('홍길동',20);
console.log(hong)