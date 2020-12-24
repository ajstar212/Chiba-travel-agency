const inputCircle1 = document.getElementById("input-circle1");
const inputCircle2 = document.getElementById("input-circle2");
const input1 = document.getElementById("do");
const input2 = document.getElementById("go");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

input1.addEventListener("focusin", function () {
  inputCircle1.classList.remove("fa", "fa-circle-thin");
  inputCircle1.classList.add("fas", "fa-circle");
  label1.classList.remove("focused");
});
input2.addEventListener("focusin", function () {
  inputCircle2.classList.remove("fa", "fa-circle-thin");
  inputCircle2.classList.add("fas", "fa-circle");
  label2.classList.remove("focused");
});
input1.addEventListener("focusout", function () {
  if (input1.value === "") {
    inputCircle1.classList.add("fa", "fa-circle-thin");
    inputCircle1.classList.remove("fas", "fa-circle");
    label1.classList.add("focused");
  }
});
input2.addEventListener("focusout", function () {
  if (input2.value === "") {
    inputCircle2.classList.add("fa", "fa-circle-thin");
    inputCircle2.classList.remove("fas", "fa-circle");
    label2.classList.add("focused");
  }
});

//Navbar related
// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
