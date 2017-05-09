$.noConflict();
jQuery(function($) {
  var menuVisible = false;
  $('#menu-button').on('click', function (e) {
    toggleMenu();
  });

  function toggleMenu() {
    var nav = $('#navbar');
    if(menuVisible) {
      nav.removeClass('visible');
      nav.addClass('hidden');
      menuVisible = false;
    } else {
      nav.removeClass('hidden');
      nav.addClass('visible');
      menuVisible = true;
    }
  }

  var paths = ["./images/home-collage.jpg", "./images/home-collage-2.jpg"];
  var pathIndex = 1;
  var slideImage = $('.slide-image');
  setInterval(function () {
    if(pathIndex >= (paths.length)) {
      pathIndex = 0;
    }
    slideImage.fadeOut(300, function () {
      slideImage.attr('src', paths[pathIndex]);
      pathIndex++;
    }).fadeIn(300);
  }, 3000);
});