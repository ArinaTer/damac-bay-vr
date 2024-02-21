const isIpade = window.matchMedia("(max-width:1170px)").matches;
isIpade;
const parentWindow = window.parent;

document.querySelector("[data-fancybox]").addEventListener("click", () => {
  parentWindow.document.body.classList.add("open-popup__floor");
});

Fancybox.bind('[data-fancybox=""]', {
    Toolbar: {
      display: {
        middle: [
          "zoomIn",
          "zoomOut",
          "toggle1to1",
          "rotateCCW",
          "rotateCW",
          "close",
        ],
        right: [],
      },
    },
    on: {
      close: () => {
        parentWindow.document.body.classList.remove("open-popup__floor");
      },
      
    },
});

