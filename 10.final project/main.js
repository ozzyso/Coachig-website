//===========================       NAVBAR       ==================================

$(".dropBtn").click(function () {
  $(".dropdown").toggleClass("display");
  $(".dropdown2").removeClass("display");
  $(".dropdown3").removeClass("display");
});

$(".dropBtn2").click(function () {
  $(".dropdown2").toggleClass("display");
  $(".dropdown3").removeClass("display");
});

$(".dropBtn3").click(function () {
  $(".dropdown3").toggleClass("display");
});

$(".lni-menu").click(function () {
  $(".menu-content").toggle();
});

$(".cartBtn").click(function () {
  $(".cart").toggleClass("display"); //====== dropdown cart code
});

//=========================         SLIDE-IN / APPEAR          ====================================

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//=========================         OPENING MODAL          ====================================

window.addEventListener("load", function () {
  setTimeOut(function open(event) {
    document.querySelector(".modal").style.display = "block";
    document.querySelector("#overlay").style.display = "block";
  }, 1000);
});

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
  document.querySelector("#overlay").style.display = "none";
});
