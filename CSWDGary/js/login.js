$(document).ready(function(){
$('#LoginForm').on('submit', function(e){
        e.preventDefault();
        var userinput = $('#username').val();
        var passinput = $('#password').val();
        if (userinput === "test" && passinput === "test") {
            this.submit();
            $('#LoginForm').hide();
            $('#displaysaver').show();
        }
    });
  });
