$(document).ready(function(){
   $("#displaytodo").click(function() {
     $('#displaytodo').hide();
     $('#hidetodo').show();
        $.ajax({
            url : "http://localhost/CSWDGary/todo.txt",
            dataType: "text",
            asynch: false,
            success : function (data) {
                $("#todohere").html(data);
            }
        });
    });
});
