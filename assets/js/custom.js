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

    $('.nav-items > a').click(function(e){         
            $(this).parents('.nav-items').find('.inner-menu').addClass('open') 
            $(this).parents('.nav-items').find('.inner-menu[main-inner-open]').find('.main-back-arrow .nav-heading-name').text($(this).parents('.nav-items').attr('data-nav-name'));
    });
    
    $('.menu-icons').click(function(){   
        $('.header-nav').addClass('nav-show')  
        $(this).toggleClass('active')
    });
    
    $('.mg-list-main .mg-list-heading').click(function(){            
        $(this).siblings('.mg-links-wpr').addClass('open') 
        $(this).siblings('.mg-links-wpr').find('.inner-back-arrow .nav-heading-name').text($(this).attr('data-nav-name'))
    });
    
    $('.main-back-arrow .icons').click(function(){            
        $(this).parents('.inner-menu').removeClass('open')     
    });
    $('.inner-back-arrow .icons').click(function(){       
        $(this).parents('.mg-links-wpr').removeClass('open')     
    });

    $(document).mouseup(function(e){ 
        if (!$(".header-nav nav").is(e.target) && $(".header-nav nav").has(e.target).length === 0){
            $(".header-nav").removeClass('nav-show');
            $(".menu-icons").removeClass('active');
        }
    }); 

        
})