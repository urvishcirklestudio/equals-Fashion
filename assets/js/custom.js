$(document).ready(function(){
    new Swiper('.announcement-bar', {  
        spaceBetween: 0,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 0,
        },
        loop: true,
        slidesPerView:'auto',
        allowTouchMove: false,
        disableOnInteraction: true       
    });

    $('.nav-items').click(function(){ 

        $(this).find('.inner-menu').attr('area-inner-open','true') 
        $(this).find('.sub-menu').find('.in-menu-wpr h6').text($(this).attr('data-nav-name'))
    });

    $('.menu-icons').click(function(){   
        $('.header-nav').addClass('nav-show')  
        $(this).toggleClass('active')
    });
      
    
})