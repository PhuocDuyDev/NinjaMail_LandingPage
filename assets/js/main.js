/*==================== SCROLL HEADER ====================*/
function scrollHeader() {
    const nav = document.querySelector('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 140) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SWIPER NEWS POST  ====================*/
const swiperPost = new Swiper('.news-post', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 42,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 69,
        },
    },
});

/*==================== SWIPER FOUNDER LIST  ====================*/
const swiperFounder = new Swiper('.founder-list', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 42,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 69,
        },
    },
});
