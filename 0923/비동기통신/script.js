// 비동기통신
// 페이지를 새로고침하지 않고도 데이터 주고받을 수 있음
document.querySelector('.get-btn').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET','https://jsonplaceholder.typicode.com/posts')

  xhr.setRequestHeader("content-type","application/json")
  xhr.send(); //JSON 형식으로 보내야함
  xhr.onload = () => {
    if(xhr.status === 200){ //200은 주로 정상
      const response = JSON.parse(xhr.response) //문자열로 오는 데이터를 객체형태로 변환
      console.log(response);
    }else {
      console.log(xhr.status);
    }
  }
})


document.querySelector('.put-btn').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT','https://jsonplaceholder.typicode.com/posts/1')
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  let data = {
    title : 'abc',
    body : 'kkk',
    userId : 1
  };
  xhr.send(JSON.stringify(data))

  xhr.onload = () =>{
    if (xhr.status ===200){
      const response = JSON.parse(xhr.response);
      console.log(response)
    }else {
      console.log(xhr.status);
    }
  }
})

document.querySelector('.fetch').addEventListener('click',() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error)
  })
})
document.querySelector('.fetch2').addEventListener('click',() => {

  let data = {
    title: 'asd',
    body: 'kkk',
    userId:1  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type" : "application/json ; charset=utf -8",
    }
  }).then((response) =>{
    return response.json();
  }).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error)
  })
})

//jQuery
document.querySelector('.jq').addEventListener('click',() => {
  $.ajax({
    url : 'https://jsonplaceholder.typicode.com/posts/1',
    type: 'get',
    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error)
    }
  })
})