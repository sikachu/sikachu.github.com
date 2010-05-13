var moving = false
var rotateInterval = null
var rotateInMilliSeconds = 10000;

$(document).ready(function(){
  $('#slider .photo').mouseover(function(){
    if(rotateInterval != null){ clearInterval(rotateInterval); rotateInterval = null; }
    if($(this).hasClass('active')){ return; }
    
    $(this).animate({opacity: 0.7}, {queue: false, complete: function(){
      $(this).animate({opacity: 1}, {queue: false})
    }})
  }).mouseout(function(){
    if(rotateInterval == null){ rotateInterval = setInterval('rotateToNextPhoto()', rotateInMilliSeconds); }
  }).click(function(){
    if($(this).hasClass('active') || moving){ return; }
    moving = true;
    
    $('#slider .photo.active').animate({width: '46px'}, 800, function(){
      $(this).removeClass('active');
    })
    $(this).animate({width: '658px'}, 800, function(){
      moving = false;
    }).addClass('active');
  });
  
  rotateInterval = setInterval('rotateToNextPhoto()', rotateInMilliSeconds);
});

function rotateToNextPhoto(){
  var nextPhoto = $('#slider .photo.active').next();
  if(nextPhoto.length != 0){
    nextPhoto.click();
  } else {
    $('.photo1').click();
  }
}