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

});