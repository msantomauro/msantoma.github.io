$( document ).ready(setUpPage);

function setUpPage() {
  const projectList = ["FIRST PROJECT", "SECOND PROJECT", "THIRD PROJECT"];

  let i;
  for (i = 0; i < projectList.length; i++) {
    addProjectToList(projectList[i], "project" + i)
  }
  $(".projectLink").hover(linkEnter, linkLeave);
}

function addProjectToList(name, id) {
  const newElt = `<div class="projectLink">${name}</div>`
  $(".projectLinks").append(newElt);

  $(this).click(function() {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 50);
  });
}

function linkEnter() {
  $(this).css("cursor", "grab");
  $(this).css("text-decoration-line", "underline");
  $(this).css("text-decoration-color", "red");
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
