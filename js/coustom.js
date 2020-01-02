$('.slide-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true
            },
            600: {
                    items: 1,
                    dots: false,
                    nav: false
                },
                1000: {
                    items: 1,
                    dots: false,
                    nav: false,
                    loop: true
                }
        }
    });

    $(".menu").slicknav({
        delay:       1000,                            // one second delay on mouseout
        animation:   {opacity:'show', height:'show'},  // fade-in and slide-down animation
        speed:       'fast',                          // faster animation speed
        autoArrows:  false
    });
    $('.counter').counterUp({
        delay: 15,
        time: 1000
    });

 
    $(document).ready(function() {
  $('.video-play').magnificPopup({type:'iframe'});
})

 $(function() {
            //Initialize filterizr with default options
            $('.filtr-container').filterizr();
        });

    $(document).ready(function() {
  $('.view').magnificPopup({type:'image'});
})
     $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100){  
            $('.header').addClass("sticky");
            $('.scrollup').show();
        }
        else{
            $('.header').removeClass("sticky");
            $('.scrollup').hide();
        }
    });
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
