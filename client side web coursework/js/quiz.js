//pulls out renders and displays the provided xml file
$(document).ready(function(){
$("#startquiz").click(function() {
  $("#startquiz").hide();
  $("#hidequiz").show();
  $.ajax({
    type: "GET",
    url: "http://localhost/client%20side%20web%20coursework/mcqs.xml",
    dataType: "xml",
    success: function (result) {
      $(result).find('mcqs').each(function () {
          $("#quiz").append($(this).text() + "<br />");
      });
    }
})
});
});
