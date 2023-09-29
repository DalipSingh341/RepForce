// nav-bar//

// const a = document.getElementById("nav")
const b = document.getElementById("change");
function navresponsive() {
  // a.classList.toggle("show")
  document.body.classList.toggle("overflow_hidden");
  b.classList.toggle("change");
}


// back-to-top//
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// preloader//
//  setTimeout(function () {
//    document.querySelector(".preloader").classList.add("loader");
//  }, 3000); 