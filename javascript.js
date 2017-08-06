
function initButton () {
  $(".button-works").click(function (){
    var blockattr = $(this).data("whatdoineed");
    if (blockattr == "all") {
      $(".work-item").fadeIn(500);
    }
    else {
      $(".work-item:not(." + blockattr + ")").fadeOut(300);
      $("." + blockattr).delay(300).fadeIn(500);
    }
  });
}

$(document).ready(function() {
  initButton();
});
