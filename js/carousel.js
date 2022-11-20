$(document).ready(function () {
  $(".slider.slider--collections").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: "linear",
    infinite: false,
    autoplay: false,
    touchThreshold: 10,
    waitForAnimate: false,

    variableWidth: true,
    adaptiveHeight: true,

    prevArrow: $(".arrow-prev.silder-arrow--collection"),
    nextArrow: $(".arrow-next.silder-arrow--collection"),
    // centerPadding: "200px",

    // centerMode: true,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  });

  $(".slider.slider--partners").slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    easing: "linear",
    infinite: false,
    autoplay: false,
    touchThreshold: 10,
    waitForAnimate: false,

    variableWidth: true,
    adaptiveHeight: true,
    prevArrow: $(".arrow-prev.silder-arrow--partners"),
    nextArrow: $(".arrow-next.silder-arrow--partners"),
  });
});

$(".arrow-prev.silder-arrow--collection").click(function () {
  $(".slider.slider--collections").slick("slickPrev");
});

$(".arrow-next.silder-arrow--collection").click(function () {
  $(".slider.slider--collections").slick("slickNext");
});

$(".arrow-prev.silder-arrow--partners").click(function () {
  $(".slider.slider--partners").slick("slickPrev");
});

$(".arrow-next.silder-arrow--partners").click(function () {
  $(".slider.slider--partners").slick("slickNext");
});
