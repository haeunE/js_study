// 정규표현식(정규식 = regex)
// const regex = /정규식/
// const regex = /\d{3}-\d{4}-\d{4}/ ---- 전화번호 입력 틀 예시
//생성: /패턴/플래그;

const regex2 = /abc/;
result = regex2.test("가나다 abc 1234");
console.log(result);

let text = '가나다 abc 1234'
result = text.match(regex2);
console.log (result)

result = text.replace(regex2,'x');
console.log(result)

//flag(플래그)
// i : 대소문자 구분안함
// g : 문자열 전체에서 검색
// m : 행이 변경되어도 검색

text = 'abcabc'
result = text.match(/a/);
console.log(result)

result = text.match(/a/g);
console.log(result)

// /./ : 모든 무자열
// /\d/ : 숫자
// /\D/ : 숫자제외
// /\w/ : 영문자, 숫자
// /\W/ : 영문자, 숫자 제외
// /\s/ : 공백
// /\S/ : 공백 제외
// | : or
// [가-힣] | [0-9] []: 범위
// /abc/ : abc문자
// [^문자] : 해당 문자 제외
// /[^abc] : a,b,c 제외하고 나머지
// ^문자 : 해당문자로 말하는

// 나머지는 regex 구글링으로 확인해보시오