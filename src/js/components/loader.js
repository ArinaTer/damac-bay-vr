import { mediaQueryMatches } from "../modules/functions.js";
export function loader() {

  let showPopup = true;
  let time = null;


  document.documentElement.classList.add("loading");
  const mediaElements = gsap.utils.toArray("[data-src]");
  const loaderPercent = document.querySelector(".loading-percent span");
  let loadingPerc = 0;
  const totalMedia = mediaElements.length;
  const failedMediaList = [];

  let loadedMedia = 0;

  const tlLoading = gsap.timeline({
    defaults: {
      duration: 2,
    },
  });

  async function mediaLoaded(e) {
    loadedMedia++;
    const loadedP = Math.floor((loadedMedia / totalMedia) * 100);
    const path = 100 - loadedP;

    await gsap.to(".loading-logo__loading", {
      clipPath: `inset(0 ${path}% 0 0)`,
      duration: 2,
      onStart: () => {
        gsap.to(loaderPercent, {
          innerText: loadedP,
          duration: 2,
          snap: {
            innerText: 1,
          },
          onComplete: () => {
            if (loadedMedia === totalMedia) {
              setTimeout(() => {
                document.documentElement.classList.remove("loading");
                document.documentElement.classList.add("loaded");
                gsapIntro();
                if (showPopup) {
                  updateTimeOut();
                }
              }, 500);
            }
          },
        });
      },
    });



  }
  // function gsapIntro() {
  //   let tlIntro = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".intro",
  //       // markers: true,
  //     },
  //   });
  //   tlIntro.to(".intro__bg", {
  //       opacity: 1,
  //       delay: 0.2,
  //       duration: 0.5,
  //     });

  //   tlIntro.to(".header", {
  //     opacity: 1,
  //     duration: 0.5,
  //   });
  //   tlIntro.to(".intro__even", {
  //       scale: 1,
  //       duration: 0.5,
  //       opacity: 1,
  //     },"<");
  //     tlIntro.to(".intro__odd", {
  //       scale: 1,
  //       duration: 0.5,
  //       opacity: 1,
  //     },"<");

  //     tlIntro.to(".intro__bottom", {
  //       scale: 1,
  //       duration: 0.5,
  //       opacity: 1,
  //     },"<");
  //     tlIntro.to(".intro__scrollto", {
  //       opacity: 1,
  //       duration: 0.5,
  //     });
  // }
  mediaElements.forEach((media) => {
    const dataSrc = media.getAttribute("data-src");

    media.onload = mediaLoaded;
    media.onerror = () => {
      console.log(`Ошибка загрузки для ${dataSrc}`);
      failedMediaList.push(dataSrc);
      mediaLoaded();
    };
    media.setAttribute("src", dataSrc);
  });



  const popupContent = document.querySelector(".time-popup");
  const stopTimer = document.querySelectorAll("[data-open-popup]");
  const stopTime = document.querySelectorAll(".stop-time");

  function openPoupTime() {

      if (!popupContent.classList.contains("popup-show")) {
          popupContent.classList.add("popup-show");
      }

  }

  function updateTimeOut(el) {
      time = setTimeout(() => {
          openPoupTime();
          (el);
      }, 5000);
  }

  // closePopupTime.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //         popupContent.classList.remove("popup-show");
  //         popupContent.classList.add("hird-hide-j");
  //         gsapOBserver.enable();


  //     });
  // });

  stopTimer.forEach((btn) => {
      btn.addEventListener("click", () => {
          clearTimeout(time);
      });
  });

  stopTime.forEach((btn) => {
      btn.addEventListener("click", () => {
          clearTimeout(time);
      });
  });
}
