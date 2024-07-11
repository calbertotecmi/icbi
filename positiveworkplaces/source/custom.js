jQuery(document).ready(function($) {
    // Fijamos el menú principal en el top bar
    $("nav.navbar").sticky({topSpacing:0});

    AOS.init({
          easing: 'ease-out-back',
          duration: 1300
    });

    hljs.initHighlightingOnLoad();


    $('.hero__scroll').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1200);
    });

    $('#modeloMobile').collapse({
        toggle: false
    });

    // Cerramos menu en movil al hacer click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    // navigation click actions 

    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(sectionTo).offset().top
        }, 100);
    });

    // mostramos el botón de scroll to top al hacer scroll
    $( window).scroll(function() {
        var $document = $(document);
        if ($document.scrollTop() >= 300) {
            $( "a#top" ).fadeIn( "slow" );
        } else {
            $( "a#top" ).fadeOut( "slow" );
        }
    });



});
// scroll function
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict



// Inicia contador tecmilenio en cifras
$(window).scroll(startCounter);
function startCounter() {
    if ($(window).scrollTop() > 200) {
        $(window).off("scroll", startCounter);
        $('.Count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 400,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
