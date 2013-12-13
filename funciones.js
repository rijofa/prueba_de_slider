$(document).ready(function() {

    var timer;

    $("#slideshow > div:gt(0)").hide();

    $("#slideshow")
        // Cuando el mouse entra limpia el timer si esta inicializado
        .mouseenter(function() {
            if (timer) { clearInterval(timer) }
        })
        // Cuando el mouse sale inicializa el slideshow
        .mouseleave(function() {
            timer = setInterval(function() {
                $("#slideshow > div:first")
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo("#slideshow");
            }, 3000);
        })
        // Disparador de slideshow
        .mouseleave();

});​