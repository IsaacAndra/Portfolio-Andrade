const swiper = new Swiper('.swiper', {
    breakpoints: {
    390: {
    slidesPerView: 1,
    spaceBetween: 5,
    },

    768: {
        slidesPerView: 2,
        spaceBetween: 10,
        },

    1024: {
        slidesPerView: 3,
        spaceBetween: 1,
    }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
      },
    
});
