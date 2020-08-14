$(document).ready(function(){
    $('.feed-slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1000,
        slidesToScroll: 1,
        easing: 'ease',
        focusOnTrue: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 630,
              settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 360,
              settings: {
                dots: false,
                arrows: false,
                centerMode: false,
                slidesToShow: 1
              }
            }
          ]
    });
  });
  // ...................SCROLL........

  // $(window).scroll(function(event) {
  //   var s=1+$(this).scrollTop()/2;
  //   $('.main__block').css('transform','translate3d(0, '+s+'px, 0)');
  // });
 
//  Логотип SVG анимация
const mySvg = new Vivus(
  'my-svg',
  {
    type: 'delayed',
    duration: 2500,
    delay: 700
  }
);