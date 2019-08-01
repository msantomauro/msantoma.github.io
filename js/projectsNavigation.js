$( document ).ready(setUpPage);

function setUpPage() {
  $("#homeLink").hover(homeLinkEnter, homeLinkLeave);
  $("#homeLink").click(linkSelect);
}

function homeLinkEnter() {
  $(this).css("cursor", "grab");
  $(this).animate({
    // tbd 
  });
}

function homeLinkLeave() {
  $(this).css("cursor", "default");
  $(this).animate({
    // tbd
  });
}

function linkSelect() {
  document.location.href = "../index.html";
}
