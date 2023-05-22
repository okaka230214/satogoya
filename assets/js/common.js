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

$(function () {
  $(".hero-slide")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 2000, // スライド、フェードアニメーションの速度1000ミリ秒
      autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
});

    /*** 料金業をPC版の時にはslicker発火しない ***/
    $(function(){
      function sliderSetting(){
            var width = $(window).width();
                  // console.log($(window).width());
          if(width <= 1400){
            // スマートフォンの場合
            $('#section-price-list__slider').slick({
              dots: true,
              speed: 500,
              arrows:false,
              centerMode:true,
              infinite:false
            });
                    // console.log("スマホ");
          } else {
              // pcの場合
              $('.slick-box.onlysp.slick-initialized').slick('unslick');
              // console.log("PC");
          }
      }
      sliderSetting();
    
      $(window).resize( function() {
          sliderSetting();
      });
  });