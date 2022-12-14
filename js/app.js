document.addEventListener('DOMContentLoaded', () => {

	

    // var passiveSupported = false;

    // try {
    //     var options = Object.defineProperty({}, "passive", {
    //         get: function() {
    //         passiveSupported = true;
    //         }
    //     });

    //     window.addEventListener("resize", (e) => {
    //         swSlideTo();
    //     }, options);
    // } catch(err) {console.log(err);}


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        // autoHeight: true,
        loop: true,
        spaceBetween: 30,
        // dynamicBullets: true,
        // watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
                initialSlide: 1,
            },
            300: {
                spaceBetween: 300,
                initialSlide: 0,
            },
        },
    });

    let cardBtn = document.querySelector('.swiper-container');
    let modal = document.querySelector('.modal-wrapper');

    cardBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if (target.closest('.btn')) {
            modal.classList.add(`${target.closest('.card').dataset.card}`);
            document.querySelector('.rate').innerHTML =  target.closest('.card').querySelector('h3').innerHTML;
            document.querySelector('.modal .value').innerHTML = target.closest('.card').querySelector('.value').innerHTML;
            document.querySelector('.modal-desc').classList.add(`card-${target.closest('.card').dataset.card}`);
            document.querySelector('.modal .card-price-old').innerHTML = target.closest('.card').querySelector('.card-price-old').innerHTML;
        }
    })

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.modal-close') || !target.closest('.modal-inner')) {
            modal.className = 'modal-wrapper';
            document.querySelector('.modal-desc').className = 'modal-desc';
        }
    })

    document.addEventListener('keyup', (e) => {
        console.log(e.key);
        if (e.key == "Escape") {
            modal.className = 'modal-wrapper';
            document.querySelector('.modal-desc').className = 'modal-desc';
        }
    })

})
// window.addEventListener('load', () => {
//     swSlideTo();
// })

// function swSlideTo() {
//     console.log('swSlideTo');
//     if (document.documentElement.clientWidth > 767) {
//         swiper.slideTo(0);
//     } else {
//         swiper.slideTo(2);
//     }
// }