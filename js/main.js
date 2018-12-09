$(document).ready(() => {
  $('body').addClass("firstBackground")
    $('#intro').hide()
    $('.navigation').hide()
$('.begin').click(() => {
  $('body').removeClass("firstBackground")
  $('.navigation').show()
  $('#intro').show()
  $('#myBtn').show()
  $('.begin').hide()
  $('#opening').hide()
  $('#subheading').hide()

});

});
