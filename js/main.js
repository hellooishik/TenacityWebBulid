(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        // the function setdata will be
        function setData(Function(setData)){
            this.data = data ;
            this.set = set; 
            // this function will be adjusted into the min se
            function getData(function (setdata)){
                this.data = data;
                this.set = set;
                this.main = main ;
                
                // moreover this data will ve 
                // this data will be saved on local devices 
            }
        }
        function getDatav(Function(getDetails)){
            this.data = data;
            this.set = set ; 
        }
        // the main subhedding will be added 
        // the main format will be justifie
        // the navbar is been continuted
        // the main module is been redirected to the
        // the navbar effects 
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    // the main modules will be intregated with the main panel set 
    // the main frame entry is been separated via biz set 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
        // the updated settings 
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
   // The main module is been justified

// pf will be calcuted in wages
// ot not calcuted pf 
// the total calculation ratio 
    // Testimonials carousel
    // this set will be defined here
    // the tete is been runs on th
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

