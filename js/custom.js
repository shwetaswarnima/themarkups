/*!
 * custom JavaScript code written here for the luster&lum site.
 */
// A $( document ).ready() block.


jQuery(document).ready(function() {

        if (document.querySelector('.slickSelectedEvent') !== null) {
            $(".slickSelectedEvent").not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                speed: 500,
                pauseOnHover: true,
                focusOnSelect: true,
                prevArrow: '<span class="prev round-arrow"></span>',
                nextArrow: '<span class="next round-arrow"></span>'
            });
        }

    $(window).resize(function () {
        if ($(window).width() < 991) {
            //  
        }
        else {
            //$('.wrapLoginModule .col-sm-6').height('auto');
        }
    
    });

    // equalheight('.wrapLoginModule .col-sm-6');
    

});
/* Equal height javs-script code*/
equalheight = function(container){

    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    jQuery(container).each(function() {
        $el = jQuery(this);
        jQuery($el).height('auto')
        topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
/* Equal height javs-script code*/

jQuery(window).on('resize', function(){

});
jQuery(window).scroll(function() {

});

$(document).ready(function() {
    if ($('#isi-activator').length > 0) {
        var windowSize = $(window).width();

        var isiBarHeight = $('#bottom-bar .visible').height() - 10;

        if (windowSize <= 767) {
            $('#bottom-bar').css('height', (isiBarHeight - 200) + 'px');
        } else {
            $('#bottom-bar').css('height', (isiBarHeight + 25) + 'px');
        }

        /*begin control script for the Important Safety Information panel*/
        $('.isi-expanded-copy').css('display', 'none');
        var bottomBarIsExpanded = false;
        $('#isi-activator, .See-Boxed-Warning a, .b1').click(function(e) {
            e.preventDefault();
            if (bottomBarIsExpanded == false) {
                /* When the ISI panel is open, we tell CSS to disregard main page
                 content for scrolling. Browser or device's native scroll bars
                 now control the ISI panel directly. */
                $('body').css('overflow-y', 'hidden');

                $('body').css('position', 'fixed')
                $('body').css('right', '0px');
                $('body').css('left', '0px');

                $('#bottom-bar').css('overflow-y', 'auto');
                $('.isi-expanded-copy').css('display', 'block');

                //animating from em to % seems to cause problems..
                $('#bottom-bar').animate({
                    height: '100%'
                }, 200);
                bottomBarIsExpanded = true;
                $('#bottom-bar').addClass('active');
            } else {
                $('.isi-expanded-copy').css('display', 'none');

                $('body').css('overflow-y', 'auto');
                $('body').css('position', 'relative');
                $('#bottom-bar').css('overflow-y', 'hidden');


                if (windowSize <= 767) {
                    $('#bottom-bar').animate({
                        height: (isiBarHeight - 200) + 'px'
                    }, 200);
                } else {
                    $('#bottom-bar').animate({
                        height: (isiBarHeight + 25) + 'px'
                    }, 200);
                }
                bottomBarIsExpanded = false;
                $('#bottom-bar').removeClass('active');
            }
        });

        $(window).resize(function() {
            /*suppl. bottom-bar - make sure inline styles continue to be updated if the bar is expanded, then collapsed, then resized. */
            if (!bottomBarIsExpanded) {
                isiBarHeight = $('#bottom-bar .visible').height() - 10;
                if (windowSize <= 767) {
                    /* $('#bottom-bar').css('height', (isiBarHeight - 200) + 'px');*/
                } else {
                    /* $('#bottom-bar').css('height', isiBarHeight + 'px');*/
                }
            }
        });
    }
    /*
    $(window).scroll(function(event) {
        var windowSize = $(window).width();

        var fromBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if (fromBottom < (200 + $('.footer-isi ').height())) {
            $("#bottom-bar").fadeOut();
        } else {
            $("#bottom-bar").fadeIn();
        }

    });
    */
});


(function($) { "use strict";

	$(function() {
        var header = $(".headerModule");
        var headerHeight = $("nav.navbar").outerHeight();
        $(".spacerHeight").css("height", headerHeight);
		$(window).scroll(function() {   
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
                header.removeClass('headerModule').addClass("scroll-on");
                
			} else {
                header.removeClass("scroll-on").addClass('headerModule');
                
			}
		});
	});		
    
    

  })(jQuery); 

  jQuery(document).ready(function($) {

    
    if (document.querySelector('.sliderHome') !== null) {
        $(".sliderHome").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev slick-prev"></span>',
            nextArrow: '<span class="next slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.therapeuticAreasSlider') !== null) {
        $(".therapeuticAreasSlider").not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.viatrisMedicinesSliderModule') !== null) {
        $(".viatrisMedicinesSliderModule").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.eventsSliderModule') !== null) {
        $(".eventsSliderModule").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.medicalNewsModuleSlider') !== null) {
        $(".medicalNewsModuleSlider").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.sliderModulePO') !== null) {
        $(".sliderModulePO").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.sliderModuleCardiovascular') !== null) {
        $(".sliderModuleCardiovascular").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.sliderModulePOProduct') !== null) {
        $(".sliderModulePOProduct").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    if (document.querySelector('.sliderModuleCardiovascularProduct') !== null) {
        $(".sliderModuleCardiovascularProduct").not('.slick-initialized').slick({
            dots: false,
            infinite: false,
            slidesToShow: 4.6,
            slidesToScroll: 4.6,
            autoplay: false,
            speed: 500,
            pauseOnHover: true,
            focusOnSelect: true,
            prevArrow: '<span class="prev round-arrow slick-prev"></span>',
            nextArrow: '<span class="next round-arrow slick-next"></span>',
            responsive: [{
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
    
    check_navigation_tabs();

    equalheight = function (a) {
        var e, b = 0,
        c = 0,
        d = new Array;
        jQuery(a).each(function () {
        if (e = jQuery(this), jQuery(e).height("auto"), topPostion = e.position().top, c != topPostion) {
        for (currentDiv = 0; currentDiv < d.length; currentDiv++)
        d[currentDiv].height(b);
        d.length = 0, c = topPostion, b = e.height(), d.push(e)
        } else
        d.push(e), b = b < e.height() ? e.height() : b;
        for (currentDiv = 0; currentDiv < d.length; currentDiv++)
        d[currentDiv].height(b)
        })
        }, jQuery(window).on("load resize ready", function () {
        equalheight(".eqCategoryBox .categoryCardImg");
        
        });
});

function check_navigation_tabs() {
    var container_width = $(".wrap").width();
  var tabs_width = 0;

    $('.slick-carousel-base li').each(function(){
      tabs_width += $(this).outerWidth();
  });

    if(tabs_width>container_width) {
      $('.quick-link arrowModule').fadeIn();
  } else {
      $('.quick-link arrowModule').fadeOut();
  }
}
$(function() {

    $('#goPrev').click(function(){
      $('.wrap').animate({scrollLeft:'-=250'}, 200);
  });
  
  $('#goNext').click(function(){
      $('.wrap').animate({scrollLeft:'+=250'}, 200);
  });

  $(window).resize(function(){
    check_navigation_tabs();
  });
  

});


 //jq for multiselect start
 
 //jq for multiselect end