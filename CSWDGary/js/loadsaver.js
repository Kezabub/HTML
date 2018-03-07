$(document).ready(function(){
   $("#displaysaver").click(function() {
     $('#displaysaver').hide();
     $('#hidesaver').show();
        $.ajax({
            url : "http://localhost/CSWDGary/savefiles.txt",
            dataType: "text",
            asynch: false,
            cache: false,
            success : function (data) {
                $("#saverhere").html(data);
                console.log(data)
            }
        });
    });
});
