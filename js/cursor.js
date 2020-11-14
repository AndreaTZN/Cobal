import { lerp, getMousePos } from './utils';

let mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));
window.addEventListener('touchmove', (ev) => (mouse = getMousePos(ev)));
export default class Cursor {
  constructor(el) {
    this.Cursor = el;
    this.Cursor.style.opacity = 0;

    this.bounds = this.Cursor.getBoundingClientRect();
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2},
      y: { previous: 0, current: 0, amt: 0.2 },
    };


    this.onMouseMoveEv = () => {
      this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
      this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y;

      gsap.to(this.Cursor, {
        duration: 1,
        ease: 'Power3.easeOut',
        opacity: 1,
      });

      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    // Assign the mouse function
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }



  render() {
    this.cursorConfigs.x.current = mouse.x;
    this.cursorConfigs.y.current = mouse.y;

    // lerp

    for (const key in this.cursorConfigs) {
      this.cursorConfigs[key].previous = lerp(
        this.cursorConfigs[key].previous,
        this.cursorConfigs[key].current,
        this.cursorConfigs[key].amt
      );
    }

    this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) 
    translateY(${this.cursorConfigs.y.previous}px)`;

    requestAnimationFrame(() => this.render());
  }
}
