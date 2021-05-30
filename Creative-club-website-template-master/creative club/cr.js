$(function() {
    'use strict';
    
      $('.carousel .carousel-item[data-src]').each(function() {
          var $this = $(this);
  
          $this.prepend([
              '<div style="background-image: url(', $this.attr('data-src'), ')"></div>'
          ].join(''));
      });
  });


  $(document).ready(function(){
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
    
    });