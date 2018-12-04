$(document).ready(() => {
    $('#intro').hide()
    $('#myBtn').hide()
    $('.morning').hide()
$('.begin').click(() => {
  $('#intro').show()
  $('#myBtn').show()
  $('.begin').hide()
  $('#opening').hide()
  $('#subheading').hide()
});
$('#myBtn').click(() => {
$('#intro').hide()
$('.morning').show()
$('#myBtn').hide()
$('.getDressed').hide()
$('.outfit1').hide()
$('.whiteBlock').hide()

});
$('.scrollDress').click(() => {
  $('.getDressed').show()
  $('.outfit1').show()
  $('.whiteBlock').show()

});
});
