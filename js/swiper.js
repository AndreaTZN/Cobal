import Swiper,{ Navigation, Keyboard} from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/controller/controller.scss'

Swiper.use([Navigation, Keyboard])


export function swiper() {

let swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView:"auto",
  keyboard: {
    enabled: true,
  },
      // pagination: {
      //   el: '.swiper-pagination', 
      //   clickable: true,
      // },
    });

    swiper.on('slideNextTransitionStart', function(){

      gsap.to('.swiper-slide-prev',{
        scale:.95,
        ease: "power3.out",
        duration:.5
      })
    })
    swiper.on('slidePrevTransitionStart', function(){
      gsap.to('.swiper-slide-active',{
        scale:1,
        ease: "power3.out",
        duration:.5,
        delay:.2
      })
    })
    swiper.on('sliderMove', function(e){

      gsap.to('.swiper-slide-prev',{
        scale:.95,
        ease: "power3.out",
        duration:.5,
        delay:.2
      })
    })



    
  }



  