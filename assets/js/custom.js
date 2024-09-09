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

    const HeroBannerSwiper = new Swiper('.hero-banner-swiper', {  
        slidesPerView: 1,  
        spaceBetween: 30,
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            waitForTransition: true,
            disableOnInteraction: false,
        },
        flipEffect: {
            rotate: 30,
            slideShadows: false,
        },  
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
			renderBullet: function (index, className) {
                return `<span class="${className}"><svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20"><circle class="path" cx="10" cy="10" r="8" fill="none" transform="rotate(-90 10 10)" stroke="#FFF" stroke-opacity="1" stroke-width="2px"></circle> <circle cx="10" cy="10" r="4" fill="#FFF"></circle></svg></span>`; 
            },  
        }
    });
    const BrandLogoSwiper = new Swiper('.brand-logo-swiper', {  
        slidesPerView: 3,  
        spaceBetween: 30, 
        speed: 1000, 
        loop:true,
        autoplay: {
            delay: 4000,
            waitForTransition: true,
            disableOnInteraction: false,
        },  
        breakpoints: {
            320: {
              slidesPerView: 3
            },
            575: {
              slidesPerView: 4
            },
            768: {
              slidesPerView: 6
            },
            992: {
              slidesPerView: 8,
            },
            1280: {
              slidesPerView: 10,
            },
        }
    });
    
    
        
})