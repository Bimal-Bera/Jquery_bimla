
<script src="jquery-3.7.1.js"></script>

// Index Page
    $(document).ready(function(){

    });
    $('#img').css({
      'background-image': 'url(img/img2.jpg)',
      'background-repeat': 'no-repeat',
      'border-radius':'20px',
      'height':'350px',
      'filter':'blur(53)',
      'background-size': 'cover'
    });

    $('#btn').css({
      'border-radius':'10px',
      'align':'center',
      'margin-left':'30px',
      'width' : '150px',
    });

    $('#btn1').click(function () { 
    
      window.location.href='about.html'
      
    });

    
    $('#btn2').click(function () { 
    
    window.location.href='contact.html'
    
    });
    $('#btn3').click(function () { 
    
    window.location.href='product.html'
    
    });
    $('#btn5').click(function () { 
    
    window.location.href='FeedBack.html'
    
    });

    $('.product').css({
      'height':'550px',
      'margin-top':'-500px',
      'margin-left':'321px'
    });

    $('.box').css({
      'border-radius' :'20px',
      'box-shadow':'1px 0px 2px 0px',
      'padding':'10px',
    });

    $('.box1').css({
      'border-radius' :'20px',
      'box-shadow':'1px 0px 2px 0px',
      'padding':'10px',
      'margin-left':'100px',
    })

    $('.cart').css({
      'width':'60px',
      'margin-left':'80px',
      'padding-left':'0px',
      
    })

    $('.img2').css({
      'width':'200px',
      'text-align':'center',
    })

    $('.logo').css({
      'border-radius': '20px',
      'margin-left':'20px'
    })
    $('#footer').css({
      'background-image': 'url(img/img2.jpg)',
      'text-align': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'height': '300px',
      'border-radius': '20px'

    })

    $('.icon').resizable();
