$.noConflict();
jQuery(function($) {
  var menuVisible = false;
  var slideshow = $('#home-collage');
  $(document).ready(function() {
    $('#menu-button').on('click', function (e) {
      toggleMenu();
    });

    $('#code-form').on('submit', function (e) {
      $('#images').empty();
      var code = ($('#code-text').val());//Gets text
      getFileNames(code, function (data) {
        $('#images').empty();
        for(var i = 0; i < data.length; i++) {
          $('#images').append(
            '<li>'+
            '<img src="../'+code+'/'+data[i]+'" alt="."/>' +
            '</li>'
          );
        }
      });
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

  function getFileNames(path, callback) {
    var query = '/'+path+'/contents.txt';
    $('#code-error-message').empty();
    $.when($.ajax({
      type: 'GET',
      url: query
    })).then(function(data) {
      var jsonData = JSON.parse(data);
      callback(jsonData);
    }, function(e) {
      console.log(e);
      onCodeError(path);
    });
  }

  function onCodeError(code) {
    $('#code-error-message').append("EL CODIGO '"+code+"' NO ES VALIDO O EXPIRO.");
  }
});
