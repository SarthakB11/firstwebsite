const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const lines = document.querySelectorAll(".line");
 // Toggle navigation menu on hamburger button click
hamburger.addEventListener("click", function () {
  nav.classList.toggle("open");
  lines.forEach((line) => {
    line.classList.toggle("active");
  });
});
 const navLinks = document.querySelectorAll(".nav-link");
 // Change hamburger button to back button on navigation link click
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.add("back");
    nav.classList.remove("open");
    lines.forEach((line) => {
      line.classList.remove("active");
    });
  });
});
 // Change back button to hamburger button on back button click
hamburger.addEventListener("click", function () {
  hamburger.classList.remove("back");
});