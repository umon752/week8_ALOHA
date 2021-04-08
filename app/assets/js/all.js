const time = 1300;

/* anime */
let animation = anime.timeline({
    loop: true
  })
  .add({
    targets: '.js-loading-img',
    translateY: ["2em", 0],
    translateZ: 0,
    opacity: [0, 1],
    duration: 800,
    delay: (el, i) => 60 * i
  })

  .add({
    targets: '.js-loading-img',
    translateX: [0, -50],
    opacity: [1, 0],
    duration: 500,
    delay: (el, i) => 60 * i
  })

$(document).ready(() => {

  /* 1.3 秒後開始執行 */
  setTimeout(function () {
    // 設定 loading 畫面消失
    $('.js-loading').addClass('loading--fadeOut');
    // Anime 停止
    animation.pause();


    /* rangeSlider */
    $(function () {
      $('#slider-range').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
        slide: function (event, ui) {
          $('#min').val('TWD ' + ui.values[0]);
          $('#max').val('TWD ' + ui.values[1] + '+');
        }
      });
      $('#min').val('TWD ' + $('#slider-range').slider('values', 0));
      $('#max').val('TWD ' + $('#slider-range').slider('values', 1) + '+');
    });



    /* datepicker */
    $('input[name="daterange"]').daterangepicker();



    // addRoom > show
    $('.js-addRoom-btn').click(function (e) {
      e.preventDefault();
      $('.js-addRoom').addClass('addRoom--show');
    });
    // addRoom > hide
    $('.addRoom__cancelBtn').click(function (e) {
      e.preventDefault();
      $('.js-addRoom').removeClass('addRoom--show');
    });



    // reverse.html > collapse
    $('.js-arrowIcon').click(function (e) {
      e.preventDefault();
      $('.js-arrowIcon .material-icons').toggleClass('arrowIcon--rotate');
      $('.js-totalText').toggleClass('totalText--hide');
    });

    /* AOS */
    AOS.init({
      duration: 600,
      once: true
    });

  }, time);

});



/* swiper__card */
// swiper__bail 
var swiper = new Swiper('.js-swiper-bail', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper__okinawa 
var swiper = new Swiper('.js-swiper-okinawa', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper__taipei 
var swiper = new Swiper('.js-swiper-taipei', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// swiper__inspiration
var swiper = new Swiper('.js-swiper-inspiration', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/* swiper__card__img */
var swiper = new Swiper('.js-swiper-result', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/* swiper__banner */
var swiper = new Swiper('.js-swiper-banner', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});