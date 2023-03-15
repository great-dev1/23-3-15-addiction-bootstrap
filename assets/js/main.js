$(document).ready(function () {
  $(".overview-slider").slick({
    arrows: false,
    dots: true,
    appendDots: $(".overview-control"),
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $(".overview-next").on("click", function () {
    $(".overview-slider").slick("slickNext");
  });

  $(".products-slider").slick({
    arrows: false,
    dots: true,
    appendDots: $(".products-control"),
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $(".products-next").on("click", function () {
    $(".products-slider").slick("slickNext");
  });
});