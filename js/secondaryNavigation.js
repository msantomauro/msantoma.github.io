$(document).ready(setUpPage);

function setUpPage() {
    $(".homeLink").hover(homeLinkEnter, homeLinkLeave);
    $(".homeLink").click(homeLinkSelect);
}

function homeLinkEnter() {
  $(this).css("cursor", "grab");
  $(".navigation").animate({
  });
}

function homeLinkLeave() {
  $(this).css("cursor", "default");
  $(".navigation").animate({
  });
}

function homeLinkSelect() {
  document.location.href = "../index.html";
}
