var TransEase = function(){
    "use strict"
   var screenWidth = $( window ).width();
   var body = $('body');
   var handlePreloader = function(){
       setTimeout(function() {
           jQuery('#preloader').remove();
           $('#main-wrapper').addClass('show');
       },800);	
       
   }

   var handleMetisMenu = function() {
       if(jQuery('#menu').length > 0 ){
           $("#menu").metisMenu();
       }
       jQuery('.metismenu > .mm-active ').each(function(){
           if(!jQuery(this).children('ul').length > 0)
           {
               jQuery(this).addClass('active-no-child');
           }
       });
   }
  
   var handleAllChecked = function() {
       $("#checkAll").on('change',function() {
           $("td input, .email-list .custom-checkbox input").prop('checked', $(this).prop("checked"));
       });
   }

   var handleNavigation = function() {
       $(".nav-control").on('click', function() {

           $('#main-wrapper').toggleClass("menu-toggle");
       });
   }
 
   var handleCurrentActive = function() {
       for (var nk = window.location,
           o = $("ul#menu a").filter(function() {
               
               return this.href == nk;
               
           })
           .addClass("mm-active")
           .parent()
           .addClass("mm-active");;) 
       {
           
           if (!o.is("li")) break;
           
           o = o.parent()
               .addClass("mm-show")
               .parent()
               .addClass("mm-active");
       }
   }


  
   var handleMinHeight = function() {
       var win_h = window.outerHeight;
       var win_h = window.outerHeight;
       if (win_h > 0 ? win_h : screen.height) {
           $(".content-body").css("min-height", (win_h + 60) + "px");
       };
   }

   var handleHeaderHight = function() {
       const headerHight = $('.header').innerHeight();
       $(window).scroll(function() {
           if ($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
               $(this.window).scrollTop() >= headerHight ? $('.dlabnav').addClass('fixed') : $('.dlabnav').removeClass('fixed')
       });
   }
   
   var handlePerfectScrollbar = function() {
       if(jQuery('.dlabnav-scroll').length > 0)
       {
           //const qs = new PerfectScrollbar('.dlabnav-scroll');
           const qs = new PerfectScrollbar('.dlabnav-scroll');
           
           qs.isRtl = false;
       }
   }

   var handleMenuPosition = function(){
        
        const innerWidth = $(window).innerWidth();
        if(innerWidth > 1024) {
            body.attr("data-sidebar-style", "full");
        }

        if(innerWidth > 767 && innerWidth < 1024) {
            body.attr("data-sidebar-style", "mini");
        }

        if(innerWidth < 768) {
            body.attr("data-sidebar-style", "overlay");
        }

       if(screenWidth > 1024){
           $(".metismenu  li").unbind().each(function (e) {
               if ($('ul', this).length > 0) {
                   var elm = $('ul:first', this).css('display','block');
                   var off = elm.offset();
                   var l = off.left;
                   var w = elm.width();
                   var elm = $('ul:first', this).removeAttr('style');
                   var docH = $("body").height();
                   var docW = $("body").width();
                   
                   if(jQuery('html').hasClass('rtl')){
                       var isEntirelyVisible = (l + w <= docW);	
                   }else{
                       var isEntirelyVisible = (l > 0)?true:false;	
                   }
                       
                   if (!isEntirelyVisible) {
                       $(this).find('ul:first').addClass('left');
                   } else {
                       $(this).find('ul:first').removeClass('left');
                   }
               }
           });
       }
   }
 
   /* Function ============ */
   return {
       init:function(){
           handleMetisMenu();
           handleAllChecked();
           handleNavigation();
           handleCurrentActive();
           
           handleMinHeight();
           handleHeaderHight();
           handlePerfectScrollbar();
       },

       load:function(){
           handlePreloader();
       },
       
       handleMenuPosition:function(){
           handleMenuPosition();
       },
   }
   
}();
jQuery(document).ready(function() {
    'use strict';
	TransEase.init();
});
/* Window Load START */
jQuery(window).on('load',function () {
   'use strict'; 
   TransEase.load();
   setTimeout(function(){
    TransEase.handleMenuPosition();
   }, 1000);
   
});
/*  Window Load END */
/* Window Resize START */
jQuery(window).on('resize',function () {
   'use strict'; 
   setTimeout(function(){
    TransEase.handleMenuPosition();
   }, 1000);
});
/*  Window Resize END */