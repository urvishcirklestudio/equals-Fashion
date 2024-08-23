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
        $(this).find('.sub-menu').toggleClass('open')
    })
    $('.main-nav-ul .nav-items').each(function(i){
        $(this).css('animation-delay',`0.${i+1}s`)
    })

    $('.menu-icons').click(function(){ 
        console.log($('.header-nav').has('serch-open'));
        
        // if($('.header-nav').has('serch-open'))
        $('.header-nav').toggleClass('nav-show')
        $('.header-nav').removeClass('serch-open')

        $(this).toggleClass('active')
    }) 
    $('.mobile-search-icon').click(function(){ 
        console.log($('.header-nav').has('serch-open'));
        
        // if($('.header-nav').has('serch-open'))
        $('.header-nav').toggleClass('serch-open')
        $(this).toggleClass('active')
    }) 
    $('.header-search-li .search-icons').click(function(){
        $('.header-search').addClass('open')
    })
    
})