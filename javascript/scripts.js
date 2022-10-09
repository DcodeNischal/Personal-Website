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

function change(flag1,flag2,flag3){
  if(document.getElementById(flag1).style.display=="block"){
    document.getElementById(flag1).style.display="none";
  }
  else{
    document.getElementById(flag1).style.display="block";
  }
  document.getElementById(flag2).style.display="none";
  document.getElementById(flag3).style.display="none";
}