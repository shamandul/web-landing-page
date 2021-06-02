const slides = document.querySelector(".slider-items").children;
const nextSlide = document.querySelector(".right-slide");
const prevSlide = document.querySelector(".left-slide");
const send = document.querySelector(".send");
const totalSlides = slides.length;
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

let index = 0;
//** Function for menu  */

menu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

/**  Onclick method to control the directions of the Slides */

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};
/** Function to control the direction of the slide */

next = (direction) => {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
};
/** Control of the onclick method of sending the email */
send.onclick = (e) => {
  e.preventDefault();
  let nameUser = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let comment = document.querySelector("#comment").value;
  let error = check(nameUser, email, comment);
  let errorName = document.querySelector("#error-name");
  let errorEmail = document.querySelector("#error-email");
  let errorComment = document.querySelector("#error-comment");

  errorName.classList.remove("error");
  errorEmail.classList.remove("error");
  errorComment.classList.remove("error");
  if (error == "Wrong name") {
    errorName.classList.add("error");
    document.querySelector("#name").focus();
  }
  if (error == "Wrong email") {
    errorEmail.classList.add("error");
    document.querySelector("#email").focus();
  }
  if (error == "Comment error") {
    errorComment.classList.add("error");
    document.querySelector("#comment").focus();
  }
};
/** function to check the form data */
check = (nameUser, email, comment) => {
  if (nameUser == null || nameUser == "") {
    return "Wrong name";
  }
  if (email == null || email == "") {
    return "Wrong email";
  }
  if (comment == null || comment == "") {
    return "Comment error";
  }
  return "Ok";
};
