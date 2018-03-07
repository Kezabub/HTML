$(document).ready(
    function(){
        $('#button').click(
            function(){
                var Add = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + Add + '</li>');
            });

       $("input[name=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }
      });

      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');
      });

      $('input').focus(function() {
        $(this).val('');
      });

      $('ol').sortable();

    }
);
