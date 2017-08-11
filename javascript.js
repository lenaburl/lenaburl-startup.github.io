
function WorksSort () {
  $(".button-works").click(function (){
    var blockattr = $(this).data("tag");
    if (blockattr == "all") {
      $(".work-item").fadeIn(500);
    }
    else {
      $(".work-item:not(." + blockattr + ")").fadeOut(300);
      $("." + blockattr).delay(300).fadeIn(500);
    }
  });
}

function ClientsCommentsSlide () {
  $(".slider-buttons input[type=radio]").click(function (){
    var btn_id = $(this).attr( "id");
    if (btn_id == "btn-1") {
      $(".slider-slides").css("transform", "translate(0)");
    }
    else if (btn_id == "btn-2") {
      $(".slider-slides").css("transform", "translate(-790px)");
    }
    else if (btn_id == "btn-3") {
      $(".slider-slides").css("transform", "translate(-1580px)");
    }
  });
}

$(document).ready(function() {
  WorksSort();
  ClientsCommentsSlide();
});
