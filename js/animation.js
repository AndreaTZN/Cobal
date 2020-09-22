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
  var controller = new ScrollMagic.Controller();

  //Remove init flash
  gsap.to(body, 0, {
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

  const tlHeaderBlur = gsap.timeline();

  tlHeaderBlur
    .fromTo(
      contentInner,
      {
        y: 0,
       
      },{
        y:-40,
        ease: "none" 
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

  // build scene
  new ScrollMagic.Scene({
    triggerElement: "header",
    triggerHook: 0,
    duration: 800,
  })
    .setTween(tlHeaderBlur)
    .addTo(controller);

  //Features

  // Timeline FeaturesTitle
  const tlFeaturesTitle = gsap.timeline();

  tlFeaturesTitle.from([titleFeaturesH2, titleFeaturesP], {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });

  new ScrollMagic.Scene({
    triggerElement: "#features",
    //duration: 100
    reverse: false,
  })
    //.addIndicators()
    .setTween(tlFeaturesTitle)
    .addTo(controller);

  //FeaturesContent

  let featuresContentInner = document.querySelectorAll(
    ".features-content-inner"
  );

  featuresContentInner.forEach(function (items) {
    const fadeInUp = gsap.timeline();

    fadeInUp
      .from(
        items.querySelector(".image"),
        {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "Power3.inOut",
        },
        "start"
      )
      .from(
        items.querySelector(".features-items h3"),
        {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "Power3.inOut",
        },
        "start"
      )
      .from(
        items.querySelector(".features-items p"),
        {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "Power3.inOut",
        },
        0.2
      )
      .from(
        items.querySelector(".btn-row-features"),
        {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: "Power3.inOut",
        },
        0.4
      );

    new ScrollMagic.Scene({
      triggerElement: items,
      reverse: false,
    })

      .setTween(fadeInUp)
      .addTo(controller);
  });

  // Users reviews
  const usersReviews = document.getElementById("users-reviews");
  const contentReviews = document.getElementsByClassName("content-reviews");
  const userText = document.querySelectorAll(".user-text")[0];
  const userImg = document.querySelectorAll(".user-img")[0];
  const userName = document.querySelectorAll(".user-Name")[0];
  const pagination = document.querySelectorAll(".swiper-pagination")[0];

  const usersReviewsTl = gsap.timeline();


  usersReviewsTl
    .from(contentReviews, 1, {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "Power3.inOut",
    })
    .from(
      userText,
      0.3,
      {
        y: 10,
        duration: 1,
        opacity: 0,
        ease: "Power3.inOut",
      },
      "-=0.6"
    )
    .from(
      userImg,
      0.3,
      {
        y: 10,
        duration: 1,
        opacity: 0,
        ease: "Power3.inOut",
      },
      "-=0.3"
    )
    .from(
      userName,
      0.3,
      {
        y: 10,
        duration: 1,
        opacity: 0,
        ease: "Power3.inOut",
      },
      "-=0.1"
    )
    .from(
      pagination,
      0.3,
      {
        duration: 1,
        opacity: 0,
        ease: "Power3.inOut",
      },
      "-=0.3"
    );
  new ScrollMagic.Scene({
    triggerElement: usersReviews,
    offset: 200,
    reverse: false,
  })

    .setTween(usersReviewsTl)
    .addTo(controller);

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
