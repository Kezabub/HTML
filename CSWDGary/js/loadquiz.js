$(document).ready(function(){
$("#displayquiz").click(function() {
  $("#displayquiz").hide();
  $("#hidequiz").show();
  $.ajax({
    type: "GET",
    url: "http://localhost/CSWDGary/mcqs.xml",
    dataType: "xml",
    success: function (result) {
      $(result).find('mcqs').each(function () {
          $("#quizhere").append($(this).text());
      });
    }
})
});
});
