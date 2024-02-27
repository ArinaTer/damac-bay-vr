import { setStylesForMediaCopyRight } from "../media_copy_right/js/set_styles_for_media_copy_right.js";
import { setCopyRightTo } from '../media_copy_right/js/set_copytight_to.js';

const parentWindow = window.parent;
const matches = window.matchMedia("(max-width: 800px)").matches;
const matcheMobile = window.matchMedia("(max-width: 1004px)").matches;

const slidesItem = document.querySelectorAll(".modal-center__slider .swiper-slide");
const slidesImg = document.querySelectorAll(".swiper-slide__img");
const openBtns = document.querySelectorAll(".modal-btn__open");
const closeBtns = Array.from(document.querySelectorAll(".modal-btn__close"));
const closeBtnsFirst = document.querySelectorAll(
  ".modals360__btn-arrow"
);
const allSwipers = document.querySelectorAll(".modal-center__slider .swiper");
let swiperSlideTo = [];

const swiperContainer = document.querySelector(".modal-center__slider");

closeBtns.push(...closeBtnsFirst);
const slidesLength = slidesItem.length;

const isIpade = window.matchMedia("(max-width:1170px)").matches;
isIpade;

const modal360Active = parentWindow.document.querySelector(".modal360");


// PhotoSphereViewer 360VR
const viewer = new PhotoSphereViewer.Viewer({
  plugins: [PhotoSphereViewer.GyroscopePlugin],
  container: document.querySelector("#viewer"),
  panorama: slidesImg[0].getAttribute("data-src"),
  defaultZoomLvl: 0,
  navbar: ["zoom", "fullscreen"],
  // navbar: ["zoom", !isIpade ? "" : "fullscreen"],
  minFov: 60,
  posePitch: 2,
  GyroscopePluginConfig: {
    absolutePosition: true,
    moveMode: "smooth",
    touchmove: true,
  },
});

viewer.addEventListener('fullscreen', ({ data }) => {
  document.documentElement.classList.toggle('opened-fullscreen');
  modal360Active.classList.toggle("modal360-fullscreen")

  if(document.body.classList.contains("active-popaps")){
    modal360Active.classList.toggle("modal360-active")
  }

});

viewer.addEventListener('ready', (e) => {
  setCopyRightTo('.psv-container', true);
  document.body.classList.add("active-modal")
}, { once: true });

const fakeFullscrenn = document.querySelector(".btn-fake");

fakeFullscrenn.addEventListener("click", ()=> {
  document.body.classList.toggle("fake-fullscreen")
});


function toggleActiveClass(e) {
  const target = e.target.closest(".modal-center__slider .swiper-slide");

  if (!target) return;

  const swiper = target.closest(".modal-center__slider .swiper");

  if (!swiper) return;

  const slides = swiper.querySelectorAll(".modal-center__slider .swiper-slide");

  slides.forEach((slide) => {
    slide.classList.remove("_active");
  });

  target.classList.add("_active");

  const slideImg = target.querySelector(".swiper-slide__img");
  viewer.setPanorama(slideImg.getAttribute("data-src"));
}

swiperContainer.addEventListener("click", toggleActiveClass);

allSwipers.forEach((swiper) => {
  const slides = swiper.querySelectorAll(".modal-center__slider .swiper-slide");

  slides.forEach((slide, index) => {
    slide.classList.remove("_active");
    if (index === 0) {
      slide.classList.add("_active");
    }
  });
});



allSwipers.forEach((swiperContainer) => {
  const slidesLength = swiperContainer.querySelectorAll(".modal-center__slider .swiper-slide").length;

  const swiperInstance = new Swiper(swiperContainer, {
    slidesPerView:
      slidesLength === 1
        ? 1
        : slidesLength === 2
        ? 2
        : slidesLength === 3
        ? 3
        : slidesLength === 4
        ? 4
        : 5,
    spaceBetween: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView:
          slidesLength === 1
            ? 1
            : slidesLength === 2
            ? 2
            : slidesLength === 3
            ? 3
            : 3,
      },
      1004: {
        slidesPerView:
          slidesLength === 1
            ? 1
            : slidesLength === 2
            ? 2
            : slidesLength === 3
            ? 3
            : slidesLength === 4
            ? 4
            : 5,
      },
    },
  });

  swiperSlideTo.push(swiperInstance);

  if (matcheMobile) {
    allSwipers.forEach(function (swiper) {
      const slidesLength = swiper.querySelectorAll(".modal-center__slider .swiper-slide").length;
  
      if (slidesLength === 1) {
        swiper.style.width = "80px";
      } else if (slidesLength >= 2 && slidesLength <= 4) {
        swiper.style.width = slidesLength * 80 + slidesLength * 8 + "px";
      } else {
        swiper.style.width = slidesLength * 45 + slidesLength * 4 + "px";
      }
    });
  } else {
    allSwipers.forEach(function (swiper) {
      const slidesLength = swiper.querySelectorAll(".modal-center__slider .swiper-slide").length;
  
      if (slidesLength === 1) {
        swiper.style.width = "85px";
      } else if (slidesLength >= 2 && slidesLength < 5) {
        swiper.style.width = slidesLength * 85 + slidesLength * 8 + "px";
      } else {
        swiper.style.width = "465px";
      }
    });
  }

});


// openBtns (360, Gallery, Floorplan, Info. BTNS)
openBtns.forEach((openBtn) => {
  openBtn.addEventListener("click", (e) => {
    const modalAttribute = openBtn.getAttribute("data-modal");

    openBtns.forEach((openBtn) => {
      openBtn.classList.remove("active");
      document.body.classList.remove("active-popaps");

      parentWindow.document
        .querySelector(".modal360")
        .classList.remove("modal360-active");
    });

    openBtn.classList.add("active");
    document.body.classList.add("active-popaps");

    parentWindow.document
      .querySelector(".modal360")
      .classList.add("modal360-active");

    const modalElement = document.getElementById(modalAttribute);
    if (modalElement) {
      modalElement.classList.add("active");
      document.body.classList.add("active-popaps");

      parentWindow.document
        .querySelector(".modal360")
        .classList.add("modal360-active");
    }
  });
});
closeBtns.forEach((closeBtn, i) => {
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closePopup();
  });

});
function closePopup() {
  const activeModals = document.querySelectorAll(".modal.active");
  activeModals.forEach((modal) => {
    modal.classList.remove("active");
    document.body.classList.remove("active-popaps");


    parentWindow.document
      .querySelector(".modal360")
      .classList.remove("modal360-active");
  });

  openBtns.forEach((openBtn) => {
    openBtn.classList.remove("active");
    document.body.classList.remove("active-popaps");
    
    parentWindow.document
      .querySelector(".modal360")
      .classList.remove("modal360-active");
  });
}
setTimeout(() => {
  const galleryBtn = document.querySelector(".gallery__btn");


  galleryBtn.addEventListener("click", () => {
    parentWindow.document.body.classList.add("close__modal-btn");
  });
}, 500);

Fancybox.bind('[data-fancybox="gallery"]', {
  Hash: false,
  on: {
    close: () => {
      parentWindow.document.body.classList.remove("close__modal-btn");
    },
    initLayout: () => {
      setCopyRightTo(".fancybox__footer", false);
    }
  },
});

(function floorSwipe() {
  var tabPanes = document.querySelectorAll(".floorplan__tab-body");

  tabPanes.forEach(function (tabPane) {
    var sliderElements = tabPane.querySelectorAll(
      ".floorplan__swiper-main .swiper"
    );
    var thumbElements = tabPane.querySelectorAll(
      ".floorplan__swiper-thumb .swiper"
    );

    sliderElements.forEach(function (slider) {
      var swiperBig = new Swiper(slider, {
        spaceBetween: 10,
        slidesPerView: "auto",
        pagination: {
          el: ".floorplan__swiper-pagination.swiper-pagination",
          clickable: true,
        },
      });

      thumbElements.forEach(function (thumbSlider) {
        var swiperThumbMob = new Swiper(thumbSlider, {
          slidesPerView: "auto",
          freeMode: true,
          spaceBetween: 10,
          watchSlidesProgress: true,
          allowTouchMove: false,
          effect: "fade",
        });

        swiperBig.controller.control = swiperThumbMob;
        swiperThumbMob.controller.control = swiperBig;
      });
    });
  });

  // Добавляем обработчик события на переключение табов
  // var tabLinks = document.querySelectorAll(".floorplan__tab-link");
  // tabLinks.forEach(function (tabLink) {
  //   tabLink.addEventListener("click", function () {
  //     // Задержка для переинициализации swiperThumbMob после переключения табов
  //     setTimeout(function () {
  //       tabPanes.forEach(function (tabPane) {
  //         var thumbElements = tabPane.querySelectorAll(
  //           ".floorplan__swiper-thumb .swiper"
  //         );
  //         thumbElements.forEach(function (thumbSlider) {
  //           var swiperThumbMob = new Swiper(thumbSlider, {
  //             slidesPerView: "auto",
  //             freeMode: true,
  //             spaceBetween: 10,
  //             watchSlidesProgress: true,
  //             allowTouchMove: false,
  //             effect: "fade",
  //           });
  //         });
  //       });
  //     }); // Задержка в миллисекундах
  //   });
  // });
})();

import { floorplanTab } from "./script/floorplanTabs.js";
floorplanTab();
setStylesForMediaCopyRight();