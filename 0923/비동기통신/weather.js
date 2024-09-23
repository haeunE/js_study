const APIKEY = '5f93999320732c7e0c5ecc203a9dedf6'
const nameSpan = document.querySelector('.weather span:first-child')
const tempSpan = document.querySelector('.weather span:last-child')

function connectGeo(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat,lon);

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=kr&units=metric`
  console.log(URL);
  fetch(URL).then((response) =>response.json()).then((data)=>{
    console.log(data);
    console.log('날씨상태 : '+ data.weather[0].description)
    console.log('흐림(%) : '+ data.clouds.all)
    console.log('일몰시간 : '+ data.sys.sunset)
    console.log('가시성(m) : '+ data.visibility)
    console.log('풍속(m/s) : '+ data.wind.speed)
    console.log('지역 : '+ data.name)

    const name = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description

    nameSpan.innerHTML=name;
    tempSpan.innerHTML=`${temp}도 /${desc}`
  }).catch((error)=>{
    console.log(error)
  })
}

function errorSeo() {
  console.log('위치 연결 오류')
}

navigator.geolocation.getCurrentPosition(connectGeo,errorSeo);