const isIpade = window.matchMedia("(max-width:1170px)").matches;
isIpade;
const parentWindow = window.parent;


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
});

