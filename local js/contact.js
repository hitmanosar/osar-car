const logo = document.querySelector(".logo");
const fb = document.querySelector(".fb");
const insta = document.querySelector(".insta");
const tw = document.querySelector(".tw");
const you = document.querySelector(".you");
const link = document.querySelector(".link");



logo.onmouseover = function () {
    logo.classList.add("logo_animate");
  };
  
  logo.onmouseleave = function () {
    logo.classList.remove("logo_animate");
  };


  const up = document.querySelector(".up");
up.onclick = function () {
  window.location.href = "contact.html#navbar";
};

fb.onclick = function () {
  window.location.href = "http://www.facebook.com";
};

insta.onclick = function () {
  window.location.href = "http://www.instagram.com";
};

link.onclick = function () {
  window.location.href = "http://www.linkedin.com";
};

tw.onclick = function () {
  window.location.href = "http://www.twitter.com";
};

you.onclick = function () {
  window.location.href = "http://www.youtube.com";
};
