$(function() {
  var req = $.ajax({
    url: "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='glasgow, uk')&format=json"
  });

  req.done(function(data) {
    //console.log(data);

    var unorderedList = $("<ul />");
    var outputString = data.query.results.channel.item.forecast;

    var arrayL = data.query.results.channel.item.forecast.length;

    for (var i = 0; i < arrayL; i++) {
      outputString = data.query.results.channel.item.forecast[i].date + "  " + data.query.results.channel.item.forecast[i].text;
      var listItem = $("<li />", {
        text: outputString
      });

      unorderedList
        .append(listItem);
    }

    $("body")
      .append(unorderedList);

  });
});