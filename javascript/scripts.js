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
    $(".navbar-menu").toggleClass("active");
  });

  $(".navbar-menu").click(function () {
    $(this).toggleClass("active");
    $(".a").toggleClass("active");
  });
});

$(window).load(function () {
  $(".preloader").delay(4000).fadeOut("slow");
  $("#overlayer").delay(4000).fadeOut("slow");
});

function change(flag1, flag2, flag3) {
  if (document.getElementById(flag1).style.display == "block") {
    document.getElementById(flag1).style.display = "none";
  } else {
    document.getElementById(flag1).style.display = "block";
  }
  document.getElementById(flag2).style.display = "none";
  document.getElementById(flag3).style.display = "none";
}

setInterval(function () {
  x = new Date();
  hour = x.getHours();
  minute = x.getMinutes();
  ampm = "";
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  time = hour + ":" + minute + " " + ampm;

  document.getElementById("clock").innerHTML = time;
}, 1000);
