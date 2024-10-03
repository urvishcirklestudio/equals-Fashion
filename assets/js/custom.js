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
    var scrollTopVal =null;
    $('.menu-icons:not(.mob-nav-close)').click(function(){ 
        $('body').css('--scroll-top',`-${$(document).scrollTop()}px`)         
        scrollTopVal = $(document).scrollTop()
        $('.header-nav').addClass('nav-show');  
        $('.menu-icons').addClass('active');
    }); 
    $('.menu-icons.mob-nav-close').click(function(){
        $('.header-nav').removeClass('nav-show');  
        $('.menu-icons').removeClass('active');
        $(document).scrollTop(scrollTopVal)
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
        $('.header-search').toggleClass('open'); 
    }); 
    $('[data-open-popup]').click(function(){  
        var openId= $(this).data('open-popup'); 
        $(openId).addClass('open')
    }); 
    $('[data-close-popup]').click(function(){  
        var CloseId= $(this).data('close-popup'); 
        $(CloseId).removeClass('open')
        
    }); 
    
    $(document).mouseup(function(e){ 
        if ($('.menu-icons').hasClass('active') && (!$(".header-nav nav").is(e.target) && $(".header-nav nav").has(e.target).length === 0)){
            $(".header-nav").removeClass('nav-show');
            $(".menu-icons").removeClass('active');
            $(document).scrollTop(scrollTopVal)
        }
        if (!$(".header-search-form-wpr").is(e.target) && $(".header-search-form-wpr").has(e.target).length === 0 && !$(".header-search-li").is(e.target) && $(".header-search-li").has(e.target).length === 0){
            $(".header-search").removeClass('open'); 
        }
        if (!$(".drawer-wpr").is(e.target) && $(".drawer-wpr").has(e.target).length === 0){
            $(".sidebar-drawer").removeClass('open'); 
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
        slidesPerView: 12,  
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
            1440: {
              slidesPerView: 12,
            },
        }
    });
    const TrandyCollection = new Swiper('.trandy-collection-swiper', {  
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true, 
        navigation: {
            nextEl: '.Collection-section .swiper--next',
            prevEl: '.Collection-section .swiper--prev',
        },
        breakpoints: {
            575: {
              slidesPerView: 1.6
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3,
            }, 
        }
    });
    const NewCollectionProduct = new Swiper('.nw-col-swiper', {  
        spaceBetween: 20,
        slidesPerView: 2, 
        navigation: {
            nextEl: '.new-collection-section .swiper--next',
            prevEl: '.new-collection-section .swiper--prev',
        },
        breakpoints: {
            200: {
              slidesPerView: 1.2
            }, 
            480: {
              slidesPerView: 1.6
            }, 
            600: {
              slidesPerView: 2
            }, 
            992:{
                spaceBetween: 20, 
            },
            1280:{
                spaceBetween: 30, 
            }  
        }
    }); 
    const blogPostSwiper = new Swiper('.blog-post-swiper', {  
        spaceBetween: 20,
        slidesPerView: 3,  
        navigation: {
            nextEl: '.blog-section .swiper--next',
            prevEl: '.blog-section .swiper--prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1.2
            }, 
            480: {
                slidesPerView: 1.6
            }, 
            600: {
                slidesPerView: 2
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            }, 
        }
    });

    // Collection Filter js 
    var filterDwrLi = document.querySelectorAll('.filter-dwr-li .fltr-title');
    
    filterDwrLi.forEach((ele, index, array) => { 
         
        if(index == 0){
            ele.nextElementSibling.style.height= ele.nextElementSibling.offsetHeight + 'px'
        }else{
            ele.nextElementSibling.style.height='0px'
        }
        ele.addEventListener('click', function(e) {
            ele.parentElement.classList.toggle('active')
            if(ele.nextElementSibling.offsetHeight == 0){
                ele.nextElementSibling.style.height= `${ele.nextElementSibling.querySelector('.fltr-grp').offsetHeight}px`;
            }else{
                ele.nextElementSibling.style.height='0px'   
            }
            
            setHeight(index, array)
        })        
    })
    
    function setHeight(num, filterDwrLi){         
        filterDwrLi.forEach((ele, index, array) => {            
            if(num != index){
                ele.parentElement.classList.remove('active')
                ele.nextElementSibling.style.height='0px'
            }
        })
    }

    var filterInput = document.querySelectorAll('.filter-dwr-ul input');
    var FilterValUl = document.querySelector('.filter-val-ul'); 
    
    // filterInput.forEach((ele, i, array) => {
    //     ele.addEventListener('click', function(e) {
    //      createFilterli()
    //     });
    // })
    
    $('.filter-dwr-ul input').click(function(){
        var inputType = $(this).attr('type')
        if(inputType === 'radio' || inputType === 'checkbox'){
            createFilterli()
        }
        
    })
    $(document).on('click', '.filter-val-ul .filter-val-items',function(){
        var inputId = $(this).data('input-id')
        var inputType = $(inputId).attr('type')

        if(inputType === 'radio' || inputType === 'checkbox'){
            $(`input${inputId}`).prop('checked', false);
            createFilterli()
        }
    })
    
    function createFilterli(){
        FilterValUl.innerHTML = "";
        if($('.filter-val-ul li').length >= 0){
            $('.cl-filter-value').show();
        }else{
            $('.cl-filter-value').hide()
        }
        filterInput.forEach((ele, i, array) => {
            if(ele.checked){
                var li = `<li class="filter-val-items flex" data-input-id="#${ele.getAttribute("id")}"><span>${ele.value}</span><button type="button" class="remove-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg></button></li>`;
                $('.filter-val-ul').append(li);
            }
        })
    }

    // PDP SLIDER
     
    
})