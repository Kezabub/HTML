$(document).ready(function(){
   $("#displaygallery").click(function() {
     $('#displaygallery').hide();
     $('#hidegallery').show();
     $.ajax({
             url : "http://localhost/CSWDGary/images.txt",
             dataType: "text",
             success : function (data) {
               $("#galleryhere").append(data);
               $("#galleryhere").unitegallery();
             }
           });
         });
       });
