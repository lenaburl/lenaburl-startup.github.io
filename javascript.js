
function initButton () {
  $(".button-works").click(function (){
    var blockattr = $(this).data("whatdoineed");
    if (blockattr == "all") {
      $(".work-item").fadeIn("slow");
    }
    else {
      $(".work-item:not(." + blockattr + ")").fadeOut("slow");
      $("." + blockattr).fadeIn("slow");
    }
  });
}

$(document).ready(function() {
  initButton();
});
