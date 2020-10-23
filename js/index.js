import { activeBurger } from "./burger";
import { pathSvg } from "./svg";
import { animation } from "./animation";
import { swiper } from "./swiper";

window.addEventListener(
  "load",
  function () {

    activeBurger();
    pathSvg();
    animation();
    swiper();
  }
);
