function rotate() {
  var lastChild = $('.slider div:last-child').clone();
  $('.slider div').removeClass('firstSlide');
  $('.slider div:last-child').addClass('hidden'); // Add hidden class to last image
  $('.slider div:last-child').remove(); // Then remove it
  $('.slider').prepend(lastChild);
  $(lastChild).addClass('firstSlide');
}

// Set interval for rotation
window.setInterval(function(){
  rotate();
}, 4000);
