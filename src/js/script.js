$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1300,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"</button>',
        // responsive: [
        //   {
        //     breakpoint: 995,
        //     settings: {
        //       dots: true,
        //       arrows: false,
        //     }
        //   }
        // ]
      
    });		
});



// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls: false,
//   nav: false
// });

// document.querySelector('.prev').addEventListener ('click', function () {
//   slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener ('click', function () {
//   slider.goTo('next');
// });