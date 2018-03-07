$(document).ready(function(){
$("#displayfiles").click(function() {
  var maketable = ("<table><thead><tr><th>Files</th></tr></table>");
  $("#fileshere").html(maketable)
  $('#displayfiles').hide();
  $('#search').show();
  $('#hidefiles').show();
  $('#showpdfs').show();
$.ajax({
        url : "http://localhost/CSWDGary/filestore/",
        cache : false,
        success: function (data) {
        $(data).find("a").each(function(i, el) {
        var found = $(el).attr('href');
        if (found.match(/\.(pdf|xml|json|tut)$/)) {
        var filesfrom = ("http://localhost/CSWDGary/filestore/" + found)
        var addfiles = ("<tr><td><a href='"+ filesfrom +"'target='blank'>"+ found +"</td></tr>");
        $("fileshere, table").append(addfiles);
        console.log(addfiles);
      }
      });
      }
      });
      var $rows = $('#table tr');
      $('#search').keyup(function() {
          var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

          $rows.show().filter(function() {
              var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
              return !~text.indexOf(val);
          }).hide();
    });
  });
});
