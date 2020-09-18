import { activeBurger } from "./burger";
import { pathSvg } from "./svg";
import { animation } from "./animation";
import {swiper} from "./swiper";
window.addEventListener(
  "load",
  function (e) {
    e.preventDefault();
    activeBurger();
    pathSvg();
    animation();
    swiper();
  },
  false
);
