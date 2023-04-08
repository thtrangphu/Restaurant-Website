let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar a");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// let links = document.querySelectorAll(".navbar a");

// links.forEach((link) => {
//   link.addEventListener("click", function () {
//     links.forEach((link) => {
//       link.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });
const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  audio.play();
});

window.addEventListener("scroll", () => {
  // Thực hiện xóa lớp active khỏi các phần tử navbar
  navbarLinks.forEach((link) => link.classList.remove("active"));
});

let searchForm = document.querySelector("#search-form");
let searchIcon = document.querySelector("#search-icon");
let close = document.querySelector("#close");
searchIcon.onclick = () => {
  searchForm.classList.toggle("active");
};

close.onclick = () => {
  searchForm.classList.remove("active");
};

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  loop: true,
  // on: {
  //   autoplayTimeLeft(s, time, progress) {
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   },
  // },
});
