$(document).ready(function () {
  var box = $('.box');
  var color = 'white';
  var colors = 'red blue yellow white green';

  box.mousedown(function () {
    $(this).addClass(color);
    box.mousemove(function () {
      $(this).addClass(color);
    });
    box.mouseup(function () {
      $('.box').off('mousemove');
    });
  });

  box.on('dblclick', function () {
    $(this).removeClass(colors);
  });
  $('#reset').on('click', function () {
    box.removeClass(colors);
  });
  $('a').on('click', function () {
    color = $(this).text().toLowerCase();
  });
});
