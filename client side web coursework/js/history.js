$('document').ready(function(){
  $('.history').on('click', function(e){
      e.preventDefault();
      var href = $(this).attr('href');
      // Retrieves the content
      findContent(href, true);
      $('.history').removeClass('active');
      $(this).addClass('active');
  });
});
// this will add the popstate event listener that will handle whenever the browser back button is pressed by the user
window.addEventListener("popstate", function(e) {
    findContent(location.pathname, false);
});

function findContent(url, addEntry) {
  $.get(url)
  .done(function( data ) {
      //Updates Content on Page
      $('#contentHolder').html(data);
      if(addEntry == true) {
          // Adds current History Entry using a pushState
          history.pushState(data, null, url);
      }
  });
}
