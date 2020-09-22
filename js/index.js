import { activeBurger } from "./burger";
import { pathSvg } from "./svg";
import { animation } from "./animation";
import {swiper} from "./swiper";
window.addEventListener(
  "load",
  function (e) {
    e.preventDefault();
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    activeBurger();
    pathSvg();
    animation();
    swiper();
  },
  false
);
