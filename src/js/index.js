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

  $('.header .header_icon').click( function(){
    $(this).closest('.header').find('.header_categories').toggleClass('active');
    $('body').toggleClass('fixed');
  })

  $('.header_categories_head_close').click( function() {
    $(this).closest('.header_categories').toggleClass('active');
    $('body').toggleClass('fixed');
  })

  $('.header_city.header_btn ').click( function(){
    $(this).toggleClass('active')
  })

  $('.hero_adress_form_input').on('focus', function () {
    $(this).parent().toggleClass('active')
  })

  $('.sales_list.slick').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<span class="prev"><span class="slick-button prev">&nbsp;</span></span>',
    nextArrow: '<span class="next"><span class="slick-button next">&nbsp;</span></span>',
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
        }
      },
    ]
  });
  

  $('.tooltip').tooltipster({
    trigger: 'click',
    theme: 'tooltipster-noir',
    functionInit: function(instance, helper){
      var content = $(helper.origin).find('.tooltip_content').detach();
      instance.content(content);
    }
  });

});
