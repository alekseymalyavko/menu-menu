import $ from "jquery";
import tooltipster from "tooltipster";
import slick from "slick-carousel";


$(document).ready(function() {
  $(window).scroll(function(){
    var header = $('header.header');
    var scroll = $(window).scrollTop();
    if (scroll >= 50) header.addClass('fixed');
    else header.removeClass('fixed');
  });


  // $('.slick').slick({
  //   variableWidth: true,
  //   infinite: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // });
  

  $('.tooltip').tooltipster({
    trigger: 'click',
    delay: 200,
    theme: 'tooltipster-noir'
  });
});
