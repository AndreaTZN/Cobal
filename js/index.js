import {
  activeBurger
} from "./burger";
import {
  pathSvg
} from "./svg";
import {
  animation
} from "./animation";
window.addEventListener("load", function (event) {
  activeBurger();
  pathSvg();
  animation();
}, false);