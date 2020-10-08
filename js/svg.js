export function pathSvg() {

  const word = document.querySelector(".path");
  const featuresLine = document.getElementsByClassName("features-line")[0];

  let featuresContentInner = document.querySelectorAll(
    ".features-content-inner"
  );

  let featureLineHeight = featuresLine.offsetHeight;



  function featureHeight() {
    return featureLineHeight;
  }

  featureHeight();


  /**
   * 
   * @param {} callback 
   * @param {} delay 
   */

  function debounce(callback, delay){
    var timer;
    return function(){
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            callback.apply(context, args);
        }, delay)
    }
}

  window.addEventListener("resize", debounce(function(e) {
    featureLineHeight = featuresLine.offsetHeight;
  },300));

  function pathPrepare(el) {
    let lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
  }


  // prepare SVG
  pathPrepare(word);

  // init controller
  let controller = new ScrollMagic.Controller();

  // build tween
  const tween = new TimelineMax().add(
    TweenMax.to(word, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    })
  )


   new ScrollMagic.Scene({
      triggerElement: featuresContentInner,
      duration: featureHeight,
      tweenChanges: true,
      reverse: false
    })

    .setTween(tween)
    .addTo(controller);
};