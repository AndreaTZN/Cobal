import { activeBurger } from "./burger";
import { pathSvg } from "./svg";
import { animation } from "./animation";
import { swiper } from "./swiper";
import Cursor from './cursor';



window.onload = () => {
  activeBurger();
  pathSvg();
  animation();
  swiper();

  const cursor = new Cursor(document.querySelector('.cursor'));
};