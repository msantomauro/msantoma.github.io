
const numOfNavItems = 5;
const navItemHeight = calculateNavItemHeight();
const navItemHalfHeight = navItemHeight / 2;

$( document ).ready(setUpNav);


function setUpNav() {
  addItemToNav("example1", "navItem1", "index.html");
  addItemToNav("example2", "navItem2", "index.html");
  addItemToNav("example3", "navItem3", "index.html");
  addItemToNav("example4", "navItem4", "index.html");
  addItemToNav("example5", "navItem5", "index.html");
}

function addItemToNav(displayName, id, filepath) {
  const newElt = `<div class="navItem" id=${id}><span>${displayName}</span></div>`;
  $(".navigation").append(newElt);
  setUpNavItem($("#" + id), filepath);
}

function calculateNavItemHeight() {
  const windowHeight = $(window).height();
  return windowHeight / numOfNavItems;
}

function setUpNavItem(navItem, filepath) {
  $(navItem).hover(hoverInHandler, hoverOutHandler);
  $(navItem).click(function(){clickHandler(filepath)});
  $(navItem).css("height", navItemHeight);

  const borderRadString = `0  ${navItemHalfHeight}px ${navItemHalfHeight}px 0`
  $(navItem).css("border-radius", borderRadString);
}

function hoverInHandler() {

  // sets cursor to grab
  $(this).css("cursor", "grab");

  $(this).animate({
    width: "60vw",
    opacity: ".7",
    letterSpacing: "10px"
  });
}

function hoverOutHandler() {

  // sets cursor to default
  $(this).css("cursor", "default");

  $(this).animate({
    width: "30vw",
    opacity: "1",
    letterSpacing: "2px"
  });
}

function clickHandler(filepath) {
  window.location.replace(filepath);
}
