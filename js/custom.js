$(document).ready(function () {
    // header sticky
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    // AOS.init();

    
    // pre-loader
    setTimeout (function() {
        $('.pre_loader').fadeOut();
      }, 3000);

    // BANNER SLIDER

    $('.fade').slick({
        loop: true,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 200,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });

    // SLICK SLIDER

    $('.center').slick({
        loop: true,
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        autoplay: true,
        speed: 1000,
        variableWidth: true,
        focusOnSelect: false,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });



    // FLIPSTAR SLIDER
    var coverflow = $(".coverflow").flipster({
        style: 'coverflow',
        spacing: -0.5,
        scrollwheel: false,
        loop: true,
        nav: false,
        buttons: false,
    });
});


$(document).ready(function () {
    $(".scroll").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1);
    });
});

$(window).scroll(function () {

    if ($(this).scrollTop() >= 500) {
        $(".scroll").addClass("effect");
    }
    else {
        $(".scroll").removeClass("effect");
    }

});

function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    }
    else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function (e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function (everybutton) {

        everybutton.addEventListener('click', function (e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function (event) {
        close_offcanvas();
    });

});








