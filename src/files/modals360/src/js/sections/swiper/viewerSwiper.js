import { handleViewPanorama } from '../viewer/handle_viewer_panorama.js';
import { viewerInstance } from '../viewer/viewer_instance.js';
import { config } from './config.js';
import { swiperInstance } from './swiper_instance.js';
import { getAmountViewerSlides } from './get_amount_viewer_slides.js';
import { getHandlerSwiperPerView } from './get_handler_swiper_perview.js';
import { getHandlerForSwiperUpdate } from './get_handler_for_swiper_update.js';
import { addClassName, removeClassName } from '../../modules/functions.js';

export function viewerSwiper() {
  const viewerSlidesExt = document.querySelectorAll(".swiper-slide.ext");
  const viewerSlidesInt = document.querySelectorAll(".swiper-slide.int");
  const amountViewerSlides = getAmountViewerSlides(viewerSlidesExt.length, viewerSlidesExt.length);
  const viewer = document.querySelector(".viewer");
  let isActiveExt = true;

  const { viewerSwiperPrerView, getSwiperWidthAndCount } = config(amountViewerSlides);
  const getSwiperPerView = getHandlerSwiperPerView(viewerSwiperPrerView);
  const setSwiperSLidesLenght = getHandlerForSwiperUpdate(getSwiperWidthAndCount, getSwiperPerView, swiperInstance);
  const setSwiperWidthOnUpdate = setSwiperSLidesLenght(viewerSlidesInt.length, viewerSlidesExt.length);
  setSwiperWidthOnUpdate(!(viewerSlidesExt.length > 0));

  const setViewPanorama = handleViewPanorama(viewerInstance);
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".viewer__btn-swap")) {
      setSwiperWidthOnUpdate(isActiveExt);
      if (isActiveExt) {
        removeClassName(viewer, "active-ext-slides");
        addClassName(viewer, "active-int-slides");
        isActiveExt = false;
        setViewPanorama(viewerSlidesInt[0]);
      } else {
        addClassName(viewer, "active-ext-slides");
        removeClassName(viewer, "active-int-slides");
        isActiveExt = true;
        setViewPanorama(viewerSlidesExt[0]);
      }
      swiperInstance.update();
    }
  });
}
