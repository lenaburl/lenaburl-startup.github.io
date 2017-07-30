
function initButton () {
  $(".button-works").click(function (){
    var blockattr = $(this).data("whatdoineed");
    if (blockattr == "all") {
      $(".work-item").show(1000);
    }
    else {
      $(".work-item:not(." + blockattr + ")").hide(1000);
      $("." + blockattr).show(1000);
    }
  });
}

$(document).ready(function() {
  setTimeout(initButton(), 1500);
});
