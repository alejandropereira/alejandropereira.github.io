$(function() {
  var menu;
  menu = $('#menu');
  $('.hero__title').fitText(0.9, {
    minFontSize: '55px',
    maxFontSize: '90px'
  });
  $('#toggle-menu').on('click', function(e) {
    e.preventDefault();
    return menu.slideToggle(300);
  });
  $(".posts").fitVids();
  return $(window).on('resize', function() {
    if ($(window).width() > 720) {
      return menu.show();
    } else {
      return menu.hide();
    }
  });
});
