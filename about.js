$(document).ready(function(){
      
});

$('#btn1').click(function () { 

  window.location.href='about.html'
  
});
$('#btn2').click(function () { 

window.location.href='index.html'

});
$('#btn3').click(function () { 

window.location.href='contact.html'

});
$('#btn4').click(function () { 

window.location.href='product.html'

});
$('#btn5').click(function () { 

window.location.href='FeedBack.html'

});

$('#footer').css({
  'background-image': 'url(img/img2.jpg)',
  'text-align': 'center',
  'background-repeat': 'no-repeat',
  'background-size': 'cover',
  'height': '300px',
  'border-radius': '20px'

})
$('.logo').css({
  'border-radius': '20px',
  'margin-left':'20px'
})

//$('.box').sortable();
$('.box').draggable();
