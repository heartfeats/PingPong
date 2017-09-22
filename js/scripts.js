$(function() {
  $('#formOne').submit(function(event) {
    var userInput = $('input#inputOne').val()

    for (var i = 1; i <= userInput; i++) {
      if (i % 15 === 0) {
        document.write('Ping Pong');
      }
      else if (i % 3 === 0) {
        document.write('Ping');
      }
      else if (i % 5 === 0) {
        document.write('Pong')
      }
      else {
        document.write(i)
      }
      document.write('<br>')
    }
    
    event.preventDefault();
  });
});
