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

    let cardBtn = document.querySelector('.swiper-container');
    let modal = document.querySelector('.modal-wrapper');

    cardBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if (target.closest('.btn')) {
            modal.classList.add(`${target.closest('.card').dataset.card}`);
            document.querySelector('.tarif').innerHTML = target.closest('.card').dataset.tarif;
            document.querySelector('.modal .title').innerHTML = target.closest('.card').dataset.price;
        }
    })

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.modal-close') || !target.closest('.modal')) {
            modal.className = 'modal-wrapper';
        }
    })

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

