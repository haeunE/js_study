let list = localStorage.getItem('name');
list = JSON.parse(list)

list.forEach((data) => {
  $('.list').append(`<img src="./img/${data.name}.jpg" width="200px"><div>${data.name} | 개수 : ${data.cnt}</div><br>`)
});