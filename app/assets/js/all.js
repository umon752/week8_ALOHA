$(document).ready(() => {

  // rangeSlider
  $(function () {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 10000,
      values: [800, 4000],
      slide: function (event, ui) {
        $('#min').val('TWD ' + ui.values[0]);
        $('#max').val('TWD ' + ui.values[1] + '+');
      }
    });
    $('#min').val('TWD ' + $('#slider-range').slider('values', 0));
    $('#max').val('TWD ' + $('#slider-range').slider('values', 1) + '+');
  });



  // datepicker
  $('input[name="daterange"]').daterangepicker();



  // addRoom > show
  $('.addRoom--show').click(function (e) {
    e.preventDefault();
    $('.addRoom').addClass('show');
  });
  // addRoom > hide
  $('.addRoom--cancel').click(function (e) {
    e.preventDefault();
    $('.addRoom').removeClass('show');
  });



  // reverse.html > collapse
  $('.arrowIcon--rotate').click(function (e) {
    e.preventDefault();
    $('.arrowIcon--rotate .material-icons').toggleClass('rotate');
    $('.totalText--hide').toggleClass('hide');
  });

});



// swiper__card
var swiper = new Swiper('.swiper__card .swiper-container', {
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

// swiper__card__img
var swiper = new Swiper('.swiper__card__img', {
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

// swiper__banner
var swiper = new Swiper('.swiper__banner', {
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