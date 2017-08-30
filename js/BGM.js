var currentPage = 0;

$('.book').on('click', '.active', nextPage).on('click', '.flipped', prevPage);

$('.book').on("swipeleft", nextPage);
$('.book').on("swiperight", prevPage);

function prevPage() {
  $('.flipped').last().removeClass('flipped').addClass('active').siblings('.page').removeClass('active');
}

function nextPage() {
  $('.active').removeClass('active').addClass('flipped').next('.page').addClass('active').siblings();
}





// add variables of players to help move Jubilee without
// bouncing too much
  var playerLeft = 0;
  var playerTop = 0;




  $(document).keydown(function(e){
    if(e.which == 37) {
    if (playerLeft >= 56) {


    playerLeft -= 15;
    $(".imageJ").css("marginLeft", playerLeft + "px");
  } else {
    playerLeft += 15;
    }

  }



  if (e.which == 38) {
    if (playerTop >= -900) {


    playerTop -= 15;
    $(".imageJ").css("marginTop", playerTop + "px");
  } else {
    playerTop += 15;
  }

 }


 // 359

  if (e.which == 39) {
    playerLeft += 25;
    $(".imageJ").css("marginLeft", playerLeft + "px");
  } else if (e.which == 40) {
    playerTop += 25;
    $(".imageJ").css("marginTop", playerTop + "px");
  }

});


// play music
$(".life").on("click", function(){
  $("#audioOne")[0].play();
});
