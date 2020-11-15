import { activeBurger } from "./burger";
import { pathSvg } from "./svg";
import { animation } from "./animation";
import { swiper } from "./swiper";
import Cursor from "./cursor";
import { isMobile } from "./utils";

window.onload = () => {
  activeBurger();
  pathSvg();
  animation();
  swiper();

  if (!isMobile()) {
    const cursor = new Cursor(document.querySelector(".cursor"));
  }
};
