// start scroll:

const scroll = document.querySelector(".scroll-up");

// window.onscroll = function () {
//   if (this.scrollY >= 900) {
//     scroll.classList.add("up-show");
//   } else {
//     scroll.classList.remove("up-show");
//   }
// };
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 900) {
    scroll.classList.add("up-show");
  } else {
    scroll.classList.remove("up-show");
  }
});

//end scroll
