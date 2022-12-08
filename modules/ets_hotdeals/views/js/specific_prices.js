/**
 * 2007-2022 ETS-Soft
 *
 * NOTICE OF LICENSE
 *
 * This file is not open source! Each license that you purchased is only available for 1 wesite only.
 * If you want to use this file on more websites (or projects), you need to purchase additional licenses.
 * You are not allowed to redistribute, resell, lease, license, sub-license or offer our resources to any third party.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please contact us for extra customization service at an affordable price
 *
 *  @author ETS-Soft <etssoft.jsc@gmail.com>
 *  @copyright  2007-2022 ETS-Soft
 *  @license    Valid for 1 website (or project) for each purchase of license
 *  International Registered Trademark & Property of ETS-Soft
*/
$(document).ready(function(){  
    InitSlickSlider();
    $('.ets_clock').each(function(){
        var id_ets_product = $(this).data('id-product');
        var date_to = $(this).data('date-to');
        if(date_to != "" && parseInt(id_ets_product) >0){
            $(this).countdown(date_to).on('update.countdown', function(event) {
              var d = (event.offset.totalDays > 1 ? event.offset.totalDays+' <span class="number">'+days+'</span> ':event.offset.totalDays+' <span class="number">'+day+'</span>');
              var h = (event.offset.hours > 1 ? event.offset.hours+' <span class="number">'+hrs+'</span> ':event.offset.hours+' <span class="number">'+hr+'</span>');
              var m = (event.offset.minutes > 1 ? event.offset.minutes+' <span class="number">'+mins+'</span> ':event.offset.minutes+' <span class="number">'+min+'</span>');
              var s = (event.offset.seconds > 1 ? event.offset.seconds+' <span class="number">'+secs+'</span> ':event.offset.seconds+' <span class="number">'+sec+'</span>');
              var $this = $(this).html(event.strftime(''
                + '<span class = "ybc_cd_item">'+d+'</span> '
                + '<span class = "ybc_cd_item">'+h+'</span> '
                + '<span class = "ybc_cd_item">'+m+'</span> '
                + '<span class = "ybc_cd_item">'+s+'</span> '));
            });
            //$(this).addClass('active');
        }
        
        
    });
    
    
    setInterval(function(){ 
        $('.ets_clock').each(function(){
            if ( $(this).find('.ybc_cd_item').length <= 0 ){
                $(this).removeClass('active')
                
            } else {
                if ($(this).hasClass('active')){
                    
                } else {
                    $(this).addClass('active')
                }
            }
        });
    }, 500);
    
                    
    
});


function BoolSlick(element){
    if ( element != 1){
            return false;
        } else {
            return  true;
        }
}
function InitSlickSlider(){
    $('.ets_hotdeal_carousel_slider .ets-product-specific').each(function(){
       var _desktop = $(this).attr('data-desktop'),
            _tablethoz = $(this).attr('data-tablet-horz'),
            _tablet = $(this).attr('data-tablet'),
            _mobile = $(this).attr('data-mobile'),
            _autoplay = BoolSlick($(this).attr('data-play')),
            _stop = BoolSlick($(this).attr('data-stop')),
            _speed = $(this).attr('data-speed'),
            _countItems = $(this).find('.product-miniature').length ;
       $(this).slick({
           slidesToShow: _desktop,
           slidesToScroll: 1,
           dots: false,
           arrows: true,
           autoplay: _autoplay,
           autoplaySpeed: _speed,
           pauseOnHover: _stop,
           infinite : _countItems >= _desktop,
           responsive: [
               {
                   breakpoint: 1200,
                   settings: {
                       slidesToShow: _desktop,
                       slidesToScroll: 1,
                       infinite : _countItems >= _desktop
                   }
               },
               {
                   breakpoint: 992,
                   settings: {
                       slidesToShow: _tablethoz,
                       slidesToScroll: 1,
                       infinite : _countItems >= _tablethoz
                   }
               },
               {
                   breakpoint: 768,
                   settings: {
                       slidesToShow: _tablet,
                       slidesToScroll: 1,
                       infinite : _countItems >= _tablet
                   }
               },
               {
                   breakpoint: 480,
                   settings: {
                       slidesToShow: _tablet,
                       slidesToScroll: 1,
                       infinite : _countItems >= _tablet
                   }
               },
               {
                   breakpoint: 0,
                   settings: {
                       slidesToShow: _mobile,
                       slidesToScroll: 1,
                       infinite : _countItems >= _mobile
                   }
               }
           ]
       });
       /*$(this).owlCarousel({
    	  items : _desktop,
            responsive : {
                    0 : {
                        items : _mobile,
                        loop : _countItems >= _mobile
                    },
                    480 : {
                        items : _tablet,
                        loop : _countItems >= _tablet
                    },
                    768 : {
                        items : _tablet,
                        loop : _countItems >= _tablet
                    },
                    992 : {
                        items : _tablethoz,
                        loop : _countItems >= _tablethoz
                    },
                    1200 : {
                        items : _desktop,
                        loop : _countItems >= _desktop
                    }
                },
            autoplay: _autoplay,
            autoplayHoverPause: _stop,
            autoplaySpeed: 6100,
           autoplayTimeout: 200,
            nav : true,
            rewindNav : false,
            dots : false,         
            navText: ['', ''],  
            callbacks: true,
    	});*/
        /*$('.ets-product-specific').mouseover(function(){
              $(this).trigger('stop.owl.autoplay');
          });
        
          $('.ets-product-specific').mouseleave(function(){
              $(this).trigger('play.owl.autoplay',[1000]);
          });*/
    });
}