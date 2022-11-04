document.addEventListener('DOMContentLoaded', () => {

	var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        dynamicBullets: true,
        watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})





// function windowWidth() {
//     if (document.documentElement.clientWidth > 1200) {
//         swiperSwitcher(0);
//     } else {
//         swiperSwitcher(1);
//     }
// }

// let mm;
// function swiperSwitcher(sw) {
//     if (mm == sw) return;
//     console.log(sw);
//     mm = sw;
//     if (sw) {
//         swiper.params.allowTouchMove = true;
//         console.log('true');
//     } else {
//         swiper.params.allowTouchMove = false;
//         console.log('false');
//     }
//     swiper.update();
// }

// window.addEventListener('load', function() {
//     windowWidth();
// });

// window.addEventListener('resize', function() {
//     windowWidth();
// });

