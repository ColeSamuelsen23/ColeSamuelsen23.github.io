let gitsocial = document.getElementById("gitsocial");

let gitdodgeball = document.getElementById("gitdodgeball");

let gitimgdodgeball = document.getElementById("gitimgdodgeball");

let gitimggoal = document.getElementById("gitimggoal");

let scrollbutton = document.getElementById("scrollbutton");

let projects = document.getElementById("projects");

let contactform = document.getElementById("contactform");

let contactbutton = document.getElementById("contactbutton");

//Button on hero that scrolls down to the projects section

scrollbutton.addEventListener("click", function () {
  projects.scrollIntoView();
});

//Send Users to my Github Profile on button or github icon click

gitdodgeball.addEventListener("click", function () {
  window.location.href = "https://github.com/ColeSamuelsen23/DodgeBall";
});

gitimgdodgeball.addEventListener("click", function () {
  window.location.href = "https://github.com/ColeSamuelsen23/DodgeBall";
});

gitsocial.addEventListener("click", function () {
  window.location.href = "https://github.com/ColeSamuelsen23/SocialMediaApp";
});

gitimggoal.addEventListener("click", function () {
  window.location.href = "https://github.com/ColeSamuelsen23/SocialMediaApp";
});

// Submits contact form

contactbutton.addEventListener("click", function () {
  contactform.submit();
});
