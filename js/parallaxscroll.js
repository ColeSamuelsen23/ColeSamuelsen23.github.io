let forest = document.getElementsByClassName("forest")[0];
let moon = document.getElementsByClassName("moon")[0];
let title = document.getElementsByClassName("animated-title")[0];
let projectheader = document.getElementById("projectsheader");
let hrheader = document.getElementById("hrheader");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  forest.style.bottom = -100 + value * 0.2 + "px";
  moon.style.left = 100 + -value * 0.4 + "px";
  moon.style.top = value * 0.4 + "px";

  let width;
  scrollY < window.innerHeight
    ? (width = (50 * scrollY) / window.innerHeight + "%")
    : (width = "50%");

  hrheader.style.width = width;
  let opacity;
  let distanceuntilinvis = 400;
  if (window.scrollY < distanceuntilinvis) {
    opacity = (distanceuntilinvis - value) / distanceuntilinvis;
  } else {
    opacity = 0;
  }

  title.style.opacity = opacity;
});
