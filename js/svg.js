export function pathSvg() {
    const body = document.querySelector("body");


    const word = document.querySelector(".path");
    const featuresLine = document.getElementsByClassName(
        "features-line"
    )[0];

    let featuresContentInner = document.querySelectorAll(
        ".features-content-inner"
    );

    let featureLineHeight = featuresLine.offsetHeight;
    console.log(featureLineHeight)

    function featureHeight() {

        return featureLineHeight

    }
    window.addEventListener('resize', function () {

        featureLineHeight = featuresLine.offsetHeight


    });



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
    ); // draw word for 0.9

    // build scene
    let scene = new ScrollMagic.Scene({
            triggerElement: featuresContentInner,
            duration: featureHeight,
            tweenChanges: true,
            reverse: false,
            offset: -200
        })
        .addIndicators()

        .setTween(tween)
        .addTo(controller);
}