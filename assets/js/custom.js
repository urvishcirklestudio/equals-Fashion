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

    $('body').css('--header-height',`${$('header').outerHeight()}px`) 
    // $(".bordered").css("border", "1px solid black");

    $(document).on('click','.nav-items > a',function(e){         
        $(this).parents('.nav-items').find('.inner-menu').addClass('open') 
        $(this).parents('.nav-items').find('.inner-menu[main-inner-open]').find('.main-back-arrow .nav-heading-name').text($(this).parents('.nav-items').attr('data-nav-name'));
    });
    var scrollTopVal =null;
    $(document).on('click','.menu-icons:not(.mob-nav-close)',function(){ 
        $('html').addClass('scrollTop');  
        $('body').css('--scroll-top',`-${$(document).scrollTop()}px`)         
        scrollTopVal = $(document).scrollTop()
        $('.header-nav').addClass('nav-show');  
        $('.menu-icons').addClass('active');
    }); 
    $(document).on('click','.menu-icons.mob-nav-close',function(){
        $('.header-nav').removeClass('nav-show');  
        $('.menu-icons').removeClass('active');
        $(document).scrollTop(scrollTopVal)
        $('html').removeClass('scrollTop');
    }); 
    
    $(document).on('click','.mg-list-main .mg-list-heading',function(){            
        $(this).siblings('.mg-links-wpr').addClass('open') 
        $(this).siblings('.mg-links-wpr').find('.inner-back-arrow .nav-heading-name').text($(this).attr('data-nav-name'))
    });
    
    $(document).on('click','.main-back-arrow .icons',function(){            
        $(this).parents('.inner-menu').removeClass('open')     
    });
    $(document).on('click','.inner-back-arrow .icons',function(){       
        $(this).parents('.mg-links-wpr').removeClass('open')     
    });
    $(document).on('click','.header-search-li .search-icons',function(){ 
        $('.header-search').toggleClass('open'); 
    }); 
    $(document).on('click','[data-open-popup]',function(){  
        var openId= $(this).data('open-popup'); 
        $(openId).addClass('open')
    }); 
    $(document).on('click','[data-close-popup]',function(){  
        var CloseId= $(this).data('close-popup'); 
        $(CloseId).removeClass('open')
        
    }); 
    $(document).on('click','.wishlist-btn', function(){  
        if($(this).parents('.product-items')){
            $(this).parents('.product-items').find('.wishlist-btn .btn').toggleClass('active')
        } 
        
        if($(this).parents('.wishlist-cart-wpr')){
            $(this).parents('.wishlist-cart-wpr').find('.wishlist-btn .btn').toggleClass('active')
        }
    });   
    $(document).on('click','[data-qty]', function(){  
        var qtyActions = $(this).data('qty');
        var productQuantity = parseInt($(this).parents('.pro-qty-wpr').find('input').val())
        
        if(qtyActions == 'plus'){ 
            $(this).parents('.pro-qty-wpr').find('input').val(productQuantity + 1)
        }
        else if(qtyActions == 'minus'){
            $(this).parents('.pro-qty-wpr').find('input').val(productQuantity - 1)
        }
        
    }) 
    const overlayHtml = `<div class="overlay-layer fade"></div>`;
    $(document).on('click', '[data-modal-target]',function(){
        $('body').append(overlayHtml); 
        var TargetModal = $(this).attr('data-modal-target')
        $(TargetModal).show();
        setTimeout(function() { 
            $(`.overlay-layer`).addClass('show');
        }, 100);
        setTimeout(function() { 
            $(TargetModal).addClass('show');
        }, 300);
    })

    $(document).on('click', '[data-modal-dismiss] , .overlay-layer',function(){  
        $('.modal,.overlay-layer').removeClass('show');
        setTimeout(function() {
            $('.overlay-layer').remove();
            $('.modal').hide();
        }, 300);
    })
    
    $(document).mouseup(function(e){ 
        if ($('.menu-icons').hasClass('active') && (!$(".header-nav nav").is(e.target) && $(".header-nav nav").has(e.target).length === 0)){
            $(".header-nav").removeClass('nav-show');
            $(".menu-icons").removeClass('active');
            $(document).scrollTop(scrollTopVal)
            $('html').removeClass('scrollTop'); 
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
    $(document).on('click', '.accordion-button',function(){        
        $(this).parent('.accordion-items').siblings().find('.accordion-button').attr('aria-label','false').parent('.accordion-items').find('.accordion-body').slideUp();
        
        if ($(this).attr('aria-label') === 'true') {
            $(this).attr('aria-label','false').siblings('.accordion-body').slideUp()
        } else {
            $(this).attr('aria-label','true').siblings('.accordion-body').slideDown()
        }
    }) 

    // PDP SLIDER
    //  .main-gallery-swiper
    const breakpoint = window.matchMedia("(min-width:991px)");
      let GallerySwiper;
      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (GallerySwiper !== undefined) GallerySwiper.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          return enableGallerySwiper();
        }
      };
      const enableGallerySwiper = function () {
        GallerySwiper = new Swiper(".main-gallery-swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                576: {
                    slidesPerView: 2
                }, 
            },
            pagination: {
                el: ".main-gallery-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".gallery-nav.nav-next",
                prevEl: ".gallery-nav.nav-prev",
            },
        });
      };
      breakpoint.addListener(breakpointChecker);
      breakpointChecker();

      const RecommendedSwiper = new Swiper('.recommended-swiper', {  
        spaceBetween: 20,
        slidesPerView: 2,  
        navigation: {
            nextEl: '.recommended-section .swiper--next',
            prevEl: '.recommended-section .swiper--prev',
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
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            }, 
        }
    });
})