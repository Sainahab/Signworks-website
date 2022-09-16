(function($) {
  "use strict"; // Start of use strict

  // scrollTo: mainNav
  $('.js-scroll-trigger#link-we-are-here').click(function(){
    $(window).scrollTo('section#we-are-here', 800, {
      offset: -52
    });
  });
  $('.js-scroll-trigger#link-services').click(function(){
    $(window).scrollTo('section#services', 800, {
      offset: -52
    });
  });
  $('.js-scroll-trigger#link-clients').click(function(){
    $(window).scrollTo('section#clients', 800, {
      offset: -52
    });
  });
  $('.js-scroll-trigger#link-events').click(function(){
    $(window).scrollTo('section#events', 800, {
      offset: -52
    });
  });
  $('.js-scroll-trigger#link-contact-us').click(function(){
    $(window).scrollTo('section#contact-us', 800, {
      offset: -52
    });
  });


  // scrollTo: Services subNav
  $('.js-scroll-trigger#link-consultancy').click(function(){
    $(window).scrollTo('#consultancy', 800, {
      offset: -152
    });
  });
  $('.js-scroll-trigger#link-web-design').click(function(){
    $(window).scrollTo('#web-design', 800, {
      offset: -152
    });
  });
  $('.js-scroll-trigger#link-cybersecurity').click(function(){
    $(window).scrollTo('#cybersecurity', 800, {
      offset: -152
    });
  });

  // BUG : z-indexing issue when sticky is applied
  // sticky: Services subNav
  // var setStickySubNavHeight = function() {
  //   // get height of header
  //   var mainNavHgt = $("#mainNav").outerHeight()
  //   //console.log(mainNavHgt)
  //   $("#service-nav").sticky({topSpacing:mainNavHgt})
  // }
  // setStickySubNavHeight();


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 120
  });

  $('body').scrollspy({
    target: '#service-nav',
    offset: 120
  });
  

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict
