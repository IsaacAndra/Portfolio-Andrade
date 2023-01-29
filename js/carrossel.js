const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 5,
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
