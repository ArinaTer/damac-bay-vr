import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

export const swiperInstance = new Swiper(".swiper", {
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
