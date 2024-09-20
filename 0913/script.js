console.log('hello'); // ; 마지막에 써야하지만 안써도 알아서 js가 처리해준다. 
//변수 선언

let a = 10;
//변수 선언 오래전 거
var b=20
let msg = 'js'

//상수
const B = 20;
//문자열
console.log("hello")
console.log('hello' + msg)
console.log(`hello ${msg}`)

//js는 연산에 관해서 잘못된다하더라도 에러로 내보내지 않는다
// infinity 는 숫자타입의 무한이다. 
//즉 js는 산술연산은 안전함, 

console.log(10/0)
console.log(typeof Infinity)

console.log("asdf"/20)
console.log(typeof(NaN))

let a1 = null;

//undefined:할당하지 않음
let b1;
console.log(b1);

//알림창-(모달/커스텀불가)
alert('aaa')
console.log('alert실행후')

let bb  = prompt('프롬프트',200);
//Number(bb) 숫자 형변환
console.log(bb)
console.log(typeof bb)

console.log("============")
let bbb = confirm('예 아니요') // ture/false
console.log(bbb)


// //자료형 변환
// String(11)
// Number("11") : 숫자로 변환

console.log("11"-"2") // 자동으로 숫자로 변환해서 계산 도출해냄

//논리연산자 - &&,||,!
console.log(1 =='1') //타입구분없이 비교
console.log(1==='1') //타입구분해서 비교


//반복문

// while(조건식){

// }
// for (초기값;조선식;증감식) {

// }