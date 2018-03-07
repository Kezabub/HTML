$(document).ready(function(){
   $("#hidesaver").click(function() {
     $('#saverhere').hide();
     $('#hidesaver').hide();
     $('#showsaver').show();
   });
   $("#showsaver").click(function() {
     $('#saverhere').show();
     $('#hidesaver').show();
     $('#showsaver').hide();
   });
   $("#hidetodo").click(function() {
     $('#todohere').hide();
     $('#hidetodo').hide();
     $('#showtodo').show();
   });
   $("#showtodo").click(function() {
     $('#todohere').show();
     $('#hidetodo').show();
     $('#showtodo').hide();
   });
   $("#hidegallery").click(function() {
     $('#galleryhere').hide();
     $('#hidegallery').hide();
     $('#showgallery').show();
   });
   $("#showgallery").click(function() {
     $('#galleryhere').show();
     $('#hidegallery').show();
     $('#showgallery').hide();
   });
   $("#hidefiles").click(function() {
     $('#fileshere').hide();
     $('#hidefiles').hide();
     $('#search').hide();
     $('#showfiles').show();
   });
   $("#showfiles").click(function() {
     $('#fileshere').show();
     $('#hidefiles').show();
     $('#showfiles').hide();
     $('#search').show();
   });
   $("#hidequiz").click(function() {
     $('#quizhere').hide();
     $('#hidequiz').hide();
     $('#showquiz').show();
   });
   $("#showquiz").click(function() {
     $('#quizhere').show();
     $('#hidequiz').show();
     $('#showquiz').hide();
   });
});
