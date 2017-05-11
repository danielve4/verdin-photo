$.noConflict();
jQuery(function($) {
  var menuVisible = false;
  var slideshow = $('#home-collage');
  $(document).ready(function() {
    $('#menu-button').on('click', function (e) {
      toggleMenu();
    });

    $('#code-form').on('submit', function (e) {
      e.preventDefault();
    });

    slideshow.slick({
      autoplay: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 4000
    });
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
});
