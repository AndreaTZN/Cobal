export function activeBurger() {
  const burger = document.querySelector(".burger-menu");
  const overlay = document.querySelector(".overlay");
  const body = document.getElementsByTagName("body")[0];

  const test = document.querySelectorAll(".overlay-inner ul li");
  const button = document.getElementsByClassName("btn-nav");

  console.log(test);
  //Timeline Header
  const overlayTl = gsap.timeline({paused: true, reversed: true});


  overlayTl.from([test, button], {
    duration: 1,
    delay: 1,
    opacity: 0,
    y: 50,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });

  burger.addEventListener("click", (e) => {
    e.preventDefault();

    if (overlay.classList.contains("is-visible")) {
      body.style.overflowY = "scroll";
    } else {
      body.style.overflowY = "hidden";
    }

    if (overlay.classList.contains("is-visible")) {

      overlayTl.reverse();

      setTimeout(function () {
        overlay.classList.remove("is-visible");
        burger.classList.remove("open");
      }, 900);
    } else {

      overlayTl.play();
      overlay.classList.add("is-visible");
      burger.classList.add("open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
      setTimeout(function () {
        overlay.classList.remove("is-visible");
        burger.classList.remove("open");
      }, 900);
      overlayTl.reverse();
    }
  });
}


// burger.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (overlay.classList.contains("is-visible")) {
//     body.style.overflowY = "scroll";
//   } else {
//     body.style.overflowY = "hidden";
//   }

//   if (overlay.classList.contains("is-visible")) {
//     console.log("disparait");
//     overlayTl.to([test, button], {
//       duration: 1,
//       opacity: 0,
//       y: 50,
//       ease: "power3.inOut",
//       stagger: {
//         amount: 0.3,
//       }
//     });
//     setTimeout(function () {
//       overlay.classList.remove("is-visible");
//       burger.classList.remove("open");
//     }, 900);
//   } else {
//     overlay.classList.add("is-visible");
//     burger.classList.add("open");

//     console.log("Apparait");
//     overlayTl.from([test, button], {
//       duration: 1,
//       delay: 1,
//       opacity: 0,
//       y: 50,
//       ease: "power3.inOut",
//       stagger: {
//         amount: 0.3,
//       },
//     });
//   }
// });