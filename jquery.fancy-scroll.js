/* ===========================================================
 * jquery-fancy-scroll.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Add Overflow Scroll Effect like on iOS/Android 
 * but for your website
 *
 * https://github.com/peachananr/fancy-scroll
 *
 * ========================================================== */

!function($){
  
  var defaults = {
		animation: "bounce",
		bounceDistance: 50,
		glowColor: "#02A1FA",
		animDuration: "0.2s",
		animEasing: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",
		innerWrapper: document
	};

  $.fn.fancy_scroll = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(settings.innerWrapper),
        container = $(this),
        posWas = 0,
        status = "off";
    if (settings.innerWrapper != document) var el = container.find($(settings.innerWrapper));
    
    
    $.fn.bounceEffect = function(px, s, anim, settings) {
      
      if (settings.innerWrapper == document) {
        var selector = $(this).find("body")
      } else {
        var selector = $(this)
      }
      
      selector.css({
        "-webkit-transform": "translate3d(0, " + px + ", 0)", 
        "-webkit-transition": "all " + s + " " + anim,
        "-moz-transform": "translate3d(0, " + px + ", 0)", 
        "-moz-transition": "all " + s + " " + anim,
        "-ms-transform": "translate3d(0, " + px + ", 0)", 
        "-ms-transition": "all " + s + " " + anim,
        "transform": "translate3d(0, " + px + ", 0)", 
        "transition": "all " + s + " " + anim
      })
    }
    $.fn.glowEffect = function(shadow, s, anim, settings) {
      if (settings.innerWrapper == document) {
        var selector = $(this).find("body")
      } else {
        var selector = $(this)
      }
      
      selector.css({
        "box-shadow": shadow, 
        "-webkit-transition": "all " + s + " " + anim,
        "-moz-transition": "all " + s + " " + anim,
        "-ms-transition": "all " + s + " " + anim,
        "transition": "all " + s + " " + anim,
      })
    }
    
    
    
    container.scroll(function(event){
      var pos = container.scrollTop(); 
      if(pos > posWas){ //if the user is scrolling down...
        if((container.scrollTop() + container.height() >= el.height()) && status == "off") {
          status = "on"
          switch (settings.animation) {
            case "bounce":
              el.bounceEffect(settings.bounceDistance * -1 + "px", settings.animDuration, settings.animEasing, settings);
              el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                el.bounceEffect("0", settings.animDuration, settings.animEasing, settings);
                el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                  status = "off"
                });
              });
            break;
            case "glow":
              el.glowEffect(settings.glowColor + " 0 -30px 50px -30px inset", settings.animDuration, settings.animEasing, settings);
              el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                el.glowEffect("none", settings.animDuration, settings.animEasing, settings);
                el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                  status = "off"
                });
              });
            break;
          }
          
        }
      }
      if(pos < posWas){ //if the user is scrolling up...
        if((container.scrollTop() + container.height() != el.height()) && status == "off") {
          if(container.scrollTop() <= 0) {
            status = "on"
            switch (settings.animation) {
              case "bounce":
                el.bounceEffect(settings.bounceDistance + "px", settings.animDuration, settings.animEasing, settings);
                el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                  el.bounceEffect("0px", settings.animDuration, settings.animEasing, settings);
                  el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                    status = "off"
                  });
                });
              break;
              case "glow":
                el.glowEffect(settings.glowColor + " 0 30px 50px -30px inset", settings.animDuration, settings.animEasing, settings);
                el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                  el.glowEffect("none", settings.animDuration, settings.animEasing, settings);
                  el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
                    status = "off"
                  });
                });
              break;
            }
            
            
          }
        }
      }
      posWas = pos; 
      
    });
    
  }
  
}(window.jQuery);


