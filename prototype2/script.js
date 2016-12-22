$(document).ready(function(){

  $('.responsive-menu').hide();

  $(window).on('resize', function(){
    var win = $(this);
    if (win.width() > 700 && $('.responsive-menu').is(":visible")) {
      $('.responsive-menu').toggle();
    }
  });

  $('.nav-bar-toggle').click(function(){
    $('.responsive-menu').toggle();
  });


});
