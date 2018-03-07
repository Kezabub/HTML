function performSearch() {
    var searchURL = "http://api.lmiforall.org.uk/api/v1/soc/search?q=";
    var searchTerms = $('#searchterm').val();
    var searchReady = searchTerms.toLowerCase();
    $.ajax({
                    type: "POST",
                    url: 'findfavourites.php',
                    data: {searchReady : searchReady},
                    success: function(data)
                    {
                        alert("success!");
                    }
                });
    $('#soctable tbody').empty();
    $.getJSON(searchURL + searchReady, function(results) {
        results.forEach(function (result) {
        var row = $("<tr></tr>");
        var codeCell = $("<td></td>");
        var titleCell = $("<td></td>");
        var descriptionCell = $("<td></td>");
        var qualificationsCell = $("<td></td>");
        var tasksCell = $("<td></td>");
        codeCell.html(result.soc);
        titleCell.html(result.title);
        descriptionCell.html(result.description);
        qualificationsCell.html(result.qualifications);
        tasksCell.html(result.tasks);
        row.append(codeCell);
        row.append(titleCell);
        row.append(descriptionCell);
        row.append(qualificationsCell);
        row.append(tasksCell);
        $('#soctable tbody').append(row);
    });
   });

}


$(function() {
	// when the page is loaded
	$('#dosearch').on('click', performSearch);
});