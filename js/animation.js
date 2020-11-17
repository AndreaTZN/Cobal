import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animation() {
  // Body
  const body = document.querySelector("body");

  //Background Header
  const backgroundImage = document.querySelector(".background-image");

  //Header
  const logo = document.querySelector(".logo");
  const navigation = document.querySelectorAll(".navigation ul li");
  const navigationButton = document.querySelectorAll(".navigation ul .btn-nav");

  const h1Span = document.querySelectorAll(".span");
  const contentInner = document.querySelectorAll(".content-inner");
  const contentInnerH1 = document.querySelectorAll(".content-inner h1");
  const burger = document.querySelector(".burger-menu");

  const button = document.querySelector(".btn-content");

  //FeaturesTitle

  const titleFeaturesH2 = document.querySelectorAll(".features-title h2");
  const titleFeaturesP = document.querySelectorAll(".features-title p");

  // init controller
  //var controller = new ScrollMagic.Controller();

  //Remove init flash
  gsap.to(body, {
    duration: 0,
    css: {
      visibility: "visible",
    },
  });

  //Timeline Header
  const tlHeader = gsap.timeline();

  tlHeader
    .from(backgroundImage, {
      duration: 1,
      opacity: 0,
      ease: "power3.inOut",
    })

    .from(
      logo,
      {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "expo.inOut",
      },
      "-=0.5"
    );

  if (body.offsetWidth > "1200") {
    tlHeader.from([navigation, navigationButton], {
      delay: -0.5,
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  } else {
    tlHeader.from(
      burger,
      {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
  }

  if (h1Span[0].offsetWidth > "680") {
    tlHeader.from(h1Span, {
      delay: -1,
      duration: 1,
      y: 60,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  } else {
    tlHeader.from(h1Span, {
      delay: -1,
      duration: 1,
      y: 120,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  }

  tlHeader.from(
    button,
    {
      duration: 0.6,
      y: 60,
      opacity: 0,
      ease: "power3.inOut",
    },
    "-=0.5"
  );

  //Blur on scroll Header

  const tlHeaderBlur = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "top top",
      end: "bottom center",
      scrub: 0.2,
    },
  });

  tlHeaderBlur
    .fromTo(
      contentInner,
      {
        y: 0,
      },
      {
        y: -100,
        ease: "none",
      },
      "Start"
    )
    .to(
      contentInnerH1,
      {
        webkitFilter: "blur(3px)",
      },
      "Start"
    );

  //Features

  // Timeline FeaturesTitle
  const tlFeaturesTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".features-title",
      start: "center center",
    },
  });

  tlFeaturesTitle.from([titleFeaturesH2, titleFeaturesP], {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });

  // new ScrollMagic.Scene({
  //   triggerElement: "#features",
  //   reverse: false,
  // })

  //   .setTween(tlFeaturesTitle)
  //   .addTo(controller);

  //FeaturesContent

  let featuresContentInner = document.querySelectorAll(
    ".features-content-inner"
  );

  featuresContentInner.forEach(function (items) {
    const fadeInUp = gsap.timeline({
      scrollTrigger: {
        trigger: items,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    fadeInUp
      .from(
        items.querySelector(".features-items p"),
        {
          y: 80,
          ease: "none",
          duration: 1,
        },
        "started"
      )
      .from(
        items.querySelector(".btn-row-features"),
        {
          y: 100,
          ease: "none",
          //delay:-.5
          duration: 1.2,
        },
        "started"
      );
  });

  // Users reviews
  const usersReviews = document.querySelector(".users-reviews");
  const swiperSlide = document.querySelectorAll(".swiper-slide");

  const usersReviewsTl = gsap.timeline({
    scrollTrigger: {
      trigger: usersReviews,
      start: "top center",
      end: "bottom center",
    },
  });

  usersReviewsTl.from(swiperSlide, {
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power3.inOut",
    stagger: {
      amount: 1,
    },
  });

  // new ScrollMagic.Scene({
  //   triggerElement: usersReviews,
  //   reverse: false,
  // })

  //   .setTween(usersReviewsTl)
  //   .addTo(controller);

  /*

    let observer = new IntersectionObserver(function (observables) {
        observables.forEach(function (observable) {
            let anims_target = observable.target;
            console.log(observable)
            if (observable.intersectionRatio > 0.5) {
                showAnims(anims_target);
                observer.unobserve(observable.target);
            }
        });

    }, {
        threshold: [0.5]
    })

    featuresContentInner.forEach(function (item) {

        observer.observe(item)
    })

    // Timeline FeaturesContent
    function showAnims(anims_target) {
        const tlFeaturesContent = gsap.timeline();
        console.log(anims_target)
        tlFeaturesContent.from(anims_target, {
            x: 200,
            duration: 1,
            opacity: 0,
            ease: "Power3.inOut"
        });
    }
    */
}
