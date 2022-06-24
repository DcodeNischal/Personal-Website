$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(".navbar-menu").toggleClass("active");
  });

   $('.navbar-menu').click(function(){
    $(this).toggleClass("active");
    $(".a").toggleClass("active");
  });

});
