$('document').ready(function(){
        $('.historyapi').on('click', function(e){
            e.preventDefault();
            var address = $(this).attr('href');
            pushForward(address, true);
            jQuery('.historyapi').removeClass('active');
            $(this).addClass('active');
        });
    });

    window.addEventListener("popstate", function(e) {
        pushForward(location.pathname, false);
    });

    function pushForward(url, addEntry) {
        $.get(url)
        .done(function( data ) {
            $('#contentHolder').html(data);
            if(addEntry == true) {
                // Adds History Entry using pushState
                history.pushState(null, null, url);
            }

        });
    }
