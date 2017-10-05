//declared a variable named currentPage and assigned it to 0

var currentPage = 0;

// used an on click function to pick both the active and flipped classes from my HTML page to 
// activate the flipping of the pages

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



// utilized a keydown function and conditionals to move my player in the maze 

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


 // 359px - innerWidth(); method in pixels - add to perfect the maze

  if (e.which == 39) {
    playerLeft += 25;
    $(".imageJ").css("marginLeft", playerLeft + "px");
  } else if (e.which == 40) {
    playerTop += 25;
    $(".imageJ").css("marginTop", playerTop + "px");
  }

});


// play music from Billie Holiday

$(".life").on("click", function(){
  $("#audioOne")[0].play();
});
