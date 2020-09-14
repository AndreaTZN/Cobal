import { activeBurger } from "./burger";
import { pathSvg } from "./svg";
import { animation } from "./animation";
window.addEventListener(
  "DOMContentLoaded",
  function (e) {
    e.preventDefault();
    activeBurger();
    pathSvg();
    animation();
  },
  false
);
