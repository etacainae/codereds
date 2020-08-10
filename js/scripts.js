$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700);
                return false;
            }
        }
    });
});

$(document).ready(function() {
  var lastScrollTop = 0;
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  var up = false;
  var newscroll;
  mywindow.scroll(function () {
      newscroll = mywindow.scrollTop();
      if (newscroll > mypos && !up) {
          $('header').addClass('active');
          up = !up;
          console.log(up);
      } else if(newscroll < mypos && up) {
          $('header').removeClass('active');
          up = !up;
      }
      mypos = newscroll;
  });
  $(window).scroll(function(event) {
    var lastScrollTop = 0;
    var st = $(this).scrollTop();
    if (st > lastScrollTop && pageYOffset > 0){
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
   lastScrollTop = st;
  });
});
$(".burger-btn").on('click', function(){
  $('.burger-btn').toggleClass("active");
  $('header').toggleClass("open");
  $('body').toggleClass("overflow");
});
$(".main-menu a").on('click', function(){
  $('#sidebar-left .main-menu').removeClass("active");
  $('#sidebar-left .burger').removeClass("active");
  $('#sidebar-left .burger .icon').trigger('click');
}); 
$("header .header-menu>ul>li").click(function() {
  $(this).siblings('.dropdown').slideToggle();
  $(this).toggleClass('active');
}); 
$(document).ready(function(){
  var button = $('.login-btn');
  var form = $('.login-popup');
  var close = $('.login-popup .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.css("display", "block");
    body.css("overflow-y", "hidden");
  });
  close.click(function(){
    form.removeClass("active");
    overlay.css("display", "none");
    body.css("overflow-y", "scroll");
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.css("display", "none");
    body.css("overflow-y", "scroll");
  });
});
$(document).ready(function(){
  var button = $('.signup-btn');
  var form = $('.signup-popup');
  var close = $('.signup-popup .close');
  var overlay = $('.overlay');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.css("display", "block");
    body.css("overflow-y", "hidden");
  });
  close.click(function(){
    form.removeClass("active");
    overlay.css("display", "none");
    body.css("overflow-y", "scroll");
  });
  overlay.click(function(){
    form.removeClass("active");
    overlay.css("display", "none");
    body.css("overflow-y", "scroll");
  });
});
$(document).ready(function(){
  var pass = $('.label-password input');
  $('.label-password .show-password').mouseup(function() {
    pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
  });
});
$(document).ready(function(){
  $('.main-banners-slider .content-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.main-banners-slider .image-banner',
    arrows: false,
  });
  $('.main-banners-slider .image-banner').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-banners-slider .content-banner, .main-banners-slider .product-banner',
    arrows: true,
    prevArrow: '.main-banners_prev-arrow',
    nextArrow: '.main-banners_next-arrow',
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
    return '<a>'+0+(i+1)+'</a>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      },
    ],
  });
  $('.main-banners-slider .product-banner').slick({
    infinite: true,
    fade: true,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-banners-slider .image-banner',
    arrows: false,
  });
});
$(window).on('load resize', function() {
    
    var slider = $('#our-goods .our-goods-wrap');

    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 860,
          settings: {
           slidesToShow: 2,
          }
        },
        {
          breakpoint: 580,
          settings: {
           slidesToShow: 1,
          }
        },
      ],
    }
   
   if ($(window).width() >= '992') 
   {
      
      if (slider.hasClass('slick-initialized')) {
         slider.slick('unslick');
      }
      return;
   }
   
   else if (!slider.hasClass('slick-initialized')) 
   {
      return slider.slick(settings);
   }
});
$(".our-goods-nav li").click(function() {
  $(".our-goods-nav li").removeClass('active');
  $(this).addClass('active');
  $("#our-goods .slider-wrap").removeClass('active');
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).addClass('active');
});
$('.goods-item .thumbnail-slider').slick({
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="thumbnail-slider_prev-arrow thumbnail-slider-arrow"></div>',
  nextArrow: '<div class="thumbnail-slider_next-arrow thumbnail-slider-arrow"></div>',
});

$(window).on('resize', function() {
    
    var slider = $('#blog.blog-preview .blog-wrap');

    var settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 561,
          settings: {
           slidesToShow: 1,
          }
        },
      ],
    }
   
   if ($(window).width() >= '769') 
   {
      
      if (slider.hasClass('slick-initialized')) {
         slider.slick('unslick');
      }
      return;
   }
   
   else if (!slider.hasClass('slick-initialized')) 
   {
      return slider.slick(settings);
   }
});

$(".filter-item.categories>li").click(function() {
  $(this).children('.submenu').slideToggle();
  $(this).toggleClass('active');
});
$(".filter .filter-title").click(function() {
  $(this).siblings('.filter-list').slideToggle();
  $(this).toggleClass('active');
});
$(document).ready(function() {
  $('.catalog-sorter').niceSelect();
});

$(document).ready(function(){
  var button = $('.mobile-filter-open');
  var form = $('.filter');
  var close = $('.filter .close');
  var body = $('body');

  button.click(function(){
    form.toggle();
    body.css("overflow-y", "hidden");
  });
  close.click(function(){
    form.toggle();
    body.css("overflow-y", "scroll");
  });
});

$(document).ready(function(){
 var cursor = $('#product .product-thumbnails .cursor');

    $('#product .product-thumbnails a').mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
   $('#product .product-thumbnails a')
     .mouseleave(function() {
         cursor.css({
             opacity: "0"
         });
     })
     .mousemove(function() {
         cursor.css({
             opacity: "1"
         });
     });
});

$(window).on('resize', function() {
    
    var slider = $('#product .product-thumbnails');

    var settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    }
   
   if ($(window).width() >= '769') 
   {
      
      if (slider.hasClass('slick-initialized')) {
         slider.slick('unslick');
      }
      return;
   }
   
   else if (!slider.hasClass('slick-initialized')) 
   {
      return slider.slick(settings);
   }
});

$(window).trigger('resize');
$(".product-content .product-additions .title").click(function() {
  $(this).siblings('.dropdown').slideToggle();
  $(this).toggleClass('active');
});
$('#similar-goods .goods').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1330,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 461,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).siblings('.amount-input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).siblings('.amount-input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
$('#checkout .selection-item').click(function () {
  $('#checkout .selection-item').removeClass('active');
  $(this).addClass('active');
});
$("#checkout .selection-item").click(function() {
  $('#checkout .selection-item').removeClass('active');
  $(this).addClass('active');
  $('#checkout .dropdown-item').removeClass('active');
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).addClass('active');
});
$("footer .col").click(function() {
  $(this).toggleClass('active-mobile');
});