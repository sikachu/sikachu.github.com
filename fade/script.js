var moving = false
var interval = 400;
var rotateInMilliSeconds = 5000;
var rotateInterval;

$(document).ready(function(){
  $('#fade .selector').click(function(){
    if($(this).hasClass('active')){ return; }
    var photo = $(this).attr('rel')
    resetInterval();
    
    $('#fade .photo.active').fadeOut(interval)
    $('#fade .' + photo).fadeIn(interval, function(){
      $('#fade .photo, #fade .selector').removeClass('active');
      $(this).addClass('active');
      $('#fade .selector[rel=' + photo + ']').addClass('active');
    })
    return false;
  })
  
  resetInterval();
});

function rotateToNextPhoto(){
  var nextPhoto = $('#fade .selector.active').next();
  if(nextPhoto.length != 0){
    nextPhoto.click();
  } else {
    $('.selector:first').click();
  }
}

function resetInterval(){
  clearInterval(rotateInterval);
  rotateInterval = setInterval('rotateToNextPhoto()', rotateInMilliSeconds);
}