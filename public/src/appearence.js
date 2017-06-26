//This function is responsible for managing fixed navbar
var initialPosition = window.pageYOffset;

window.addEventListener('scroll', function (e) {
  var distanceY = window.pageYOffset || document.scrollTop,
    shrinkDistance = 50
    header = $('header');

  if (distanceY > shrinkDistance && distanceY > (initialPosition)) {
    header.addClass('shrinked');
  }
  else {
    header.removeClass('shrinked');
  }
  initialPosition = distanceY;
});

$('.nav a').on('click', function () {
  $('.navbar-toggle').click();
});