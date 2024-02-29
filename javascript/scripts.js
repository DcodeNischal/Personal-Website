$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggler").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".navbar-menu").click(function () {
    $(".menu-toggler").removeClass("active");
    $(this).toggleClass("active");
    $(".a").toggleClass("active");
  });
});

$(window).on("load", function () {
  $("#preloader").fadeOut("slow");
});
