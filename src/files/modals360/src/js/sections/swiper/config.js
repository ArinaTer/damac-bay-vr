import { IS_TABLETS } from '../../components/queries.js';

export function config(amountViewerSlides) {
  let widthViewerSlide;
  let viewerSwiperPrerView;
  let conditionViewerSlides;
  let initialWidthViewerSwiper;
  let actualSwiperWidth;
  if (!IS_TABLETS) {
    widthViewerSlide = 90;
    viewerSwiperPrerView = 5;
    initialWidthViewerSwiper = 500;
  } else {
    widthViewerSlide = 100;
    viewerSwiperPrerView = 3;
    initialWidthViewerSwiper = 300;
  }
  conditionViewerSlides = amountViewerSlides >= viewerSwiperPrerView;

  return {
    viewerSwiperPrerView,
    getSwiperWidthAndCount(amountViewerSlides) {
      conditionViewerSlides = amountViewerSlides >= viewerSwiperPrerView;
      actualSwiperWidth = conditionViewerSlides ? initialWidthViewerSwiper : amountViewerSlides * widthViewerSlide;
      return { swiperWidth: actualSwiperWidth, conditionViewerSlides };
    }
  };

}