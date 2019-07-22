
let animationToggle = true;

$( document ).ready(setUpAnimation);

function setUpAnimation() {
  $(".fullName").hover(animateNameOne, animateNameTwo);
}

function animateNameOne() {

  if (animationToggle) {
    $(".firstName").animate({
      top: "4vw"
    }, 500);
    $(".lastName").animate({
      top: "6vw"
    }, 500);
  } else {
    $(".firstName").animate({
      top: "6vw"
    }, 500);
    $(".lastName").animate({
      top: "4vw"
    }, 500);
  }

  animationToggle = !animationToggle;

}

function animateNameTwo() {
  $(".firstName").animate({
    top: "5vw"
  }, 500);

  $(".lastName").animate({
    top: "5vw"
  }, 500);
}
