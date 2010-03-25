var moving = false

$(document).ready(function(){
  $('#slider .photo').mouseover(function(){
    if($(this).hasClass('active')){ return; }
    
    $(this).animate({opacity: 0.7}, {queue: false, complete: function(){
      $(this).animate({opacity: 1}, {queue: false})
    }})
  }).click(function(){
    if($(this).hasClass('active') || moving){ return; }
    moving = true;
    
    $('#slider .photo.active').animate({width: '46px'}, 1000, function(){
      $(this).removeClass('active');
    })
    $(this).animate({width: '752px'}, 1000, function(){
      moving = false;
    }).addClass('active');
  });
})