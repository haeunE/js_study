let now = 1;

$('.btn').on('click', (e) => {
  let no = e.target.dataset.no;
  
  $('.carousel').css('transform', 'translateX(-' + no +'00vw)')
  now=no+1;
})


$('.next').on('click', () => {
  if(now<3){
    $('.carousel').css('transform', 'translateX(-' + now + '00vw)')
    now++;
  }
})

$('.prev').on('click', () => {
  if(now>1){
    $('.carousel').css('transform', `translateX(-${now-2}00vw)`)
    now--;
  }
})