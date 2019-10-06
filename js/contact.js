$( document ).ready(setUpPage);

function setUpPage() {

    $(".contactLink").hover(linkEnter, linkLeave);
    $("#email").click(function(){document.location.href = "mailto:mia_santomauro@brown.edu"});
    $("#linkedin").click(function(){window.open("https://www.linkedin.com/in/mia-santomauro-b2037a152/", "_blank")});
}

function linkEnter() {
  $(this).css("cursor", "pointer");
  $(this).css("text-decoration-line", "underline");
  $(this).css("text-decoration-color", "#406E8E");
  $(this).css("text-decoration-style", "wavy");
  $(this).animate({
    letterSpacing: "5px"
  });
}

function linkLeave() {
  $(this).css("cursor", "default");
  $(this).css("text-decoration-line", "none");
  $(this).animate({
    letterSpacing: "2px"
  });
}
