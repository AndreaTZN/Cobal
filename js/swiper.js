export function swiper() {

let swiper = new Swiper('.swiper-container', {
  
      pagination: {
        el: '.swiper-pagination', 
        clickable: true,
      },
    });

  // Users reviews
  const usersReviews = document.getElementById("users-reviews");
  const contentReviews = document.getElementsByClassName("content-reviews");
  const userText = document.querySelectorAll(".swiper-slide-active .user-text");
  const userImg = document.querySelectorAll(".user-img")[0];
  const userName = document.querySelectorAll(".user-Name")[0];
  const pagination = document.querySelectorAll(".swiper-pagination")[0];

    swiper.on('touchMove', function(swiper, event) {
 
     
    console.log(swiper.touches.startY)
    })

    swiper.on('slideChangeTransitionStart', function() {

    })
  }



  