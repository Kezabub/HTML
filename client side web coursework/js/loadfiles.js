//cache is set to false so the users browser does not cache data that no longer exists
$(document).ready(function(){
$("#ViewItems").click(function() {
  //make the button disappear so the same ajax call cannot be made by the user twice
  //disabling the button would have been more ideal but it would not work for whatever reason so this is second best
  $("#ViewItems").hide();
  $("#filesearch").show();
  $("#pdfviewer").show();
  $("#startquiz").show();
  //folder where our images live
    var folder = "http://localhost/client%20side%20web%20coursework/files/userstuff/images/";
    var displayfilestable = ("<table style='text-align:center; align:center; margin-left: auto; margin-right: auto;'><thead><tr><th>Files</th></tr></table>");
    $("#filestable").html(displayfilestable)
    $.ajax({
        //the first ajax call, brings in our buttons and a script for interacting with them from a text document for users to view
        url : "http://localhost/client%20side%20web%20coursework/loadbuttons.txt",
        dataType: "text",
        cache: false,
        success : function (data) {
           $("#buttonsthathidestuff").append(data);
           $.ajax({
             //the second ajax call, brings in our images from a text document for users to view
             url : "http://localhost/client%20side%20web%20coursework/loadimages.txt",
             dataType: "text",
             cache: false,
             success : function (data) {
               $("#gallery").append(data);
               $.ajax({
                  url : folder,
                  cache : false,
                  success: function (data) {
                    var $gallery = $("#gallery");
                    $(data).find("a").each(function(i, el) {
                      var val = $(el).attr('href');
                      if (val.match(/\.(jpe?g|png|gif)$/)) {
                        $gallery.append("<img alt='uploaded file' src='" + folder + val + "' data-image='" + folder + val + "' data-description='uploaded file by user'>");
                        $("#gallery").unitegallery();
                        $.ajax({
                            //brings in our videos from a text document for users to view
                            //due to needing 3 file formats so videos are supported in all browsers we have opted to not allow users the ability to upload their own videos
                            url : "http://localhost/client%20side%20web%20coursework/loadvideos.txt",
                            dataType: "text",
                            cache: false,
                            success : function (data) {
                               $("#videogallery").append(data);
                               jQuery("#videogallery").unitegallery({
                                 gallery_theme: "video",
                                 theme_skin: "right-thumb",
                               });
                               $.ajax({
                                  url : "http://localhost/client%20side%20web%20coursework/files/userstuff/files/",
                                  cache : false,
                                  success: function (data) {
                                    $(data).find("a").each(function(i, el) {
                                      var val = $(el).attr('href');
                                      if (val.match(/\.(pdf|doc|docx|txt|html|js|css|rar|7zip|xml|json|tut|zip)$/)) {
                                      var fileslocation = ("http://localhost/client%20side%20web%20coursework/files/userstuff/files/" + val)
                                      var adddata = ("<tr><td><a href='"+ fileslocation +"'target='pdfviewer'>"+ val +"</td></tr>");
                                      $("filestable, table").append(adddata);
                                      console.log(adddata);
                                }
                              });
                              }
                             });
                             }
                           });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
          //creates the searching functionality for our files table
          $("#filesearch").on("keyup", function() {
            var value = $(this).val();
               $("table tr").each(function (index) {
                   $row = $(this);
                   $row.show();
                   if (index !== 0 && value) {
                       var found = false;
                       $row.find("td").each(function () {
                           var cell = $(this).text();
                           if (cell.indexOf(value.toLowerCase()) >= 0) {
                               found = true;
                               return;
                           }
                       });
                       if (found === true) {
                           $row.show();
                       }
                       else {
                           $row.hide();
                       }
                   }
                 });
               });
             });
           });
