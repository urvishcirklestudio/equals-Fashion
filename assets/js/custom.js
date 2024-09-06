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

    $('header').css('--header-height',`${$('header').outerHeight()}px`)
    // $(".bordered").css("border", "1px solid black");

    $('.nav-items > a').click(function(e){         
            $(this).parents('.nav-items').find('.inner-menu').addClass('open') 
            $(this).parents('.nav-items').find('.inner-menu[main-inner-open]').find('.main-back-arrow .nav-heading-name').text($(this).parents('.nav-items').attr('data-nav-name'));
    });
    
    $('.menu-icons').click(function(){   
        $('.header-nav').toggleClass('nav-show')  
        $('.menu-icons').toggleClass('active')
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
    $('.header-search-li .search-icons').click(function(){ 
        $('.header-search').toggleClass('open')      
    }); 
    
    $(document).mouseup(function(e){ 
        if (!$(".header-nav nav").is(e.target) && $(".header-nav nav").has(e.target).length === 0){
            $(".header-nav").removeClass('nav-show');
            $(".menu-icons").removeClass('active');
        }
        if (!$(".header-search-form-wpr").is(e.target) && $(".header-search-form-wpr").has(e.target).length === 0 && !$(".header-search-li").is(e.target) && $(".header-search-li").has(e.target).length === 0){
            $(".header-search").removeClass('open'); 
        }
    }); 
    
    
        
})