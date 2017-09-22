$(function() {
  $("#clear").click(function() {
    $("#output").html('');
  });
  $('#formOne').submit(function(event) {
    var userInput = $('input#inputOne').val()

    for (var i = 1; i <= userInput; i++) {
      if (i % 15 === 0) {
        // document.write('Ping Pong');
        $("#output").append('Ping Pong');

      }
      else if (i % 3 === 0) {
        $("#output").append('Ping');
      }
      else if (i % 5 === 0) {
        $("#output").append('Pong')
      }
      else {
        $("#output").append(i)
      }
      $("#output").append('<br>')
    }
    event.preventDefault();
  });
});
