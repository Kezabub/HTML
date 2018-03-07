//script shows and hides functionality as needed, displays dialogue messages and adds a further check to the sign (the other checks are contained with in the PHP script)
$(document).ready(function(){
  $( "#welcome" ).dialog();

  $('#adminlogin').click(function(){
      $( "#logininfo" ).dialog();
    });

    $('#additems').click(function(){
        $( "#additeminfo" ).dialog();
      });

      $('#ViewItems').click(function(){
          $( "#viewiteminfo" ).dialog();
        });

  $('#LoginSys').on('submit', function(e){
        e.preventDefault();
        var lenuser = $('#username').val().length;
        var lenpass = $('#password').val().length;
        if (lenuser === 5 && lenpass === 5) {
            this.submit();
            $('#loginpopup').hide();
            $('#adminlogin').hide();
            $('#additems').show();
        }
    });

  $('#hidequiz').click(function() {
    $("#startquiz").show();
    $("#hidequiz").hide();
    $("#quiz").hide();
  });

});
