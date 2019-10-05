$( document ).ready(setUpPage);

function setUpPage() {
  const projectList = ["2D GAME ENGINE", "MAPS", "AUTOCORRECT"];

  let i;
  let linkID;
  let projectID;
  for (i = 0; i < projectList.length; i++) {
    linkID = "link" + i;
    projectID = "project" + i;
    addProjectToList(projectList[i], linkID, projectID);
  }
  $(".projectLink").hover(linkEnter, linkLeave);
}

function addProjectToList(name, linkID, projectID) {
  const newElt = `<div class="projectLink" id=${linkID}>${name}</div>`
  $(".projectLinks").append(newElt);
  $("#" + linkID).click(function(){scrollToID(projectID);});
}

function linkEnter() {
  $(this).css("cursor", "grab");
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

function scrollToID(id) {
  $('html, body').animate({
      scrollTop: $("#" + id).offset().top
  }, 50);
}
