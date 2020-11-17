import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { debounce } from "./utils";

export function pathSvg() {
  const word = document.querySelector(".path");

  const featuresLine = document.getElementsByClassName("features-line")[0];

  let featuresContentInner = document.querySelectorAll(".features-line");

  let featureLineHeight = featuresLine.offsetHeight;

  function featureHeight() {
    return featureLineHeight;
  }

  featureHeight();

  window.addEventListener(
    "resize",
    debounce(function (e) {
      featureLineHeight = featuresLine.offsetHeight;
    }, 300)
  );

  function pathPrepare(el) {
    let lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
  }

  // prepare SVG
  pathPrepare(word);

  // init controller
  //let controller = new ScrollMagic.Controller();

  const svgTween = gsap.timeline({
    scrollTrigger: {
      trigger: featuresContentInner,
      start: "top center",
      end: "bottom +=200",
      scrub: true,
    },
  });

  svgTween.to(word, {
    strokeDashoffset: 0,
    ease: "none",
  });
  // new ScrollMagic.Scene({
  //   triggerElement: featuresContentInner,
  //   duration: featureHeight,
  //   tweenChanges: true,
  //   reverse: false,
  // })

  //   .setTween(tween)
  //   .addTo(controller);
}
