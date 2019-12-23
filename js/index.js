/**
 * Created by nelly on 23/12/2019.
 */
$("#scroll-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top - 80
    }, 1000);

    $(".active").removeClass("active");
    $(this).parent().addClass("active");
});
$("#scroll-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 80
    }, 1000);
    $(".active").removeClass("active");
    $(this).parent().addClass("active");
});
$("#scroll-works").click(function() {
    $('html, body').animate({
        scrollTop: $("#how_it_works").offset().top - 80
    }, 1000);
    $(".active").removeClass("active");
    $(this).parent().addClass("active");
});
$("#scroll-services").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top - 80
    }, 1000);
    $(".active").removeClass("active");
    $(this).parent().addClass("active");
});
$("#scroll-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 80
    }, 1000);

    $(".active").removeClass("active");
    $(this).parent().addClass("active");
});

    var btn = $('.scroll-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }


        if ($(window).scrollTop() < 550){
            $(".active").removeClass("active");
            $("#scroll-home").parent().addClass("active");
        }
        if ($(window).scrollTop() < 1050 && $(window).scrollTop() > 550 ){
            $(".active").removeClass("active");
            $("#scroll-about").parent().addClass("active");
        }
        if ($(window).scrollTop() < 1700 && $(window).scrollTop() > 1050 ){
            $(".active").removeClass("active");
            $("#scroll-works").parent().addClass("active");
        }
        if ($(window).scrollTop() < 3200 && $(window).scrollTop() > 1900 ){
            $(".active").removeClass("active");
            $("#scroll-services").parent().addClass("active");
        }
        if ( $(window).scrollTop() >= 3200 ){
            $(".active").removeClass("active");
            $("#scroll-contact").parent().addClass("active");
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

