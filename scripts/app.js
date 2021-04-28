$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    if ($(this).scrollTop() > $nav.height()) {
      $("#brand").css("opacity", "1");
    }else{
      $("#brand").css("opacity", "0");
    }

  });
});