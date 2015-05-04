jQuery(document).ready(function($) {
    var siteUrl = 'http://'+(document.location.hostname||document.location.host);
    var spinner = $( ".ajax-main" ).html();

    // Make sure that all clicked links that link to your internal website
    // don't just reload the page but execute a History.pushState call
    $(document).delegate('a[href^="/"],a[href^="'+siteUrl+'"]', "click", function(e) {
        e.preventDefault();
        $( ".ajax-main" ).html(spinner);
        $( ".ajax-content" ).addClass("active").scrollTop(0);
        $(".homepage" ).addClass("slide-left");
        $( ".ajax-main" ).load( this.pathname + " .page", function( response, status, xhr ) {
          if ( status == "error" ) {
            var msg = "Sorry but there was an error: ";
            $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
          }
        });

        History.pushState({}, "", this.pathname);
    });

    // Catch all History stateChange events
    History.Adapter.bind(window, 'statechange', function(){
      var State = History.getState();

      
    });

    $(document).on('click', '.back-btn', function(event){
      $(".ajax-content" ).removeClass("active");
      $(".homepage" ).removeClass("slide-left");

      History.pushState({}, "", "/");
    });
});