$(function (){
  var $header = $(".header-container");
  $(window).on("load scroll" ,function(){
  var value = $(this).scrollTop();
  if (value > 0){
    $header.addClass("scroll");
    $header.fadeIn();
  }else{
    $header.removeClass("scroll");
  }
  });
});

// slick
$('.section-gallery__area').slick({
  autoplay:true,
  autoplaySpeed: 0,
  arrows:false,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 8000,
});

$(function() {
  $('.').slick({
      fade: true,
      autoplay: true,
      speed: 1500,
      autoplaySpeed : 2000,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
  })
});