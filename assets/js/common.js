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

// 料金表

// function checkBreakPoint() {
// 	w = $(window).width();
// 	if (w <= 1400) {
// 		// スマホ向け
// 		$('.section-price-list__container').not('.slick-initialized').slick({
// 			//スライドさせる
// 			slidesToShow: 1,
// 			slidesToScroll: 1,
// 			arrows: true,
// 			autoplay: false
// 		});
// 	} else {
// 		// PC向け
// 		$('.section-price-list__container.slick-initialized').slick('unslick');
// 	}
// }
// // ウインドウがリサイズする度にチェック
// $(window).resize(function(){
// 	checkBreakPoint();
// });
// // 初回チェック
// checkBreakPoint();

// ギャラリー

function checkBreakPointGallery() {
	w = $(window).width();
	if (w <= 1400) {
		// スマホ向け
		$('.section-gallery__area').not('.slick-initialized').slick({
			//スライドさせる
  autoplay:true,
  autoplaySpeed: 0,
  arrows:false,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 8000,
		});
	} else {
		// PC向け
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
	}
}
// ウインドウがリサイズする度にチェック
$(window).resize(function(){
	checkBreakPointGallery();
});
// 初回チェック
checkBreakPointGallery();










// ハンバーガメニュー
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const li = document.querySelector('.nav-items__item');

ham.addEventListener('click', function addActive() {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

// メニューからリンクに飛んだらトグルをしまう
// スマートフォンの場合
$(document).on('click', '.nav-items__item', function(){
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

$(function showSetting(){
  $(window).resize(function() {
    var $hn =$('.header__nav');
    var width = $(window).width();
    if (width <= 1400){
      // console.log("スマホ用表示");
    } else{
      // console.log("PC表示");
    $hn.removeAttr('style');
    }
  });
});


// ローダ
$(function () {
  function end_loader() {
    $('.loader').fadeOut(1000);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 500)
  })
})