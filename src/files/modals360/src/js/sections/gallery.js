import { Fancybox } from "@fancyapps/ui";
import { setCopyRightTo } from '../../files/media_copy_right/js/set_copytight_to.js';
import { addClassToAlter, removeClassToAlter } from './alter_parent_window.js';
Fancybox.defaults.Hash = false;
export function gallery() {
  Fancybox.bind("[data-fancybox]", {
    Image: {
      zoom: false,
    },
    on: {
      initLayout: () => {
        setCopyRightTo('.fancybox__carousel', false);
        addClassToAlter();
      },
      close: () => {
        removeClassToAlter();
      },
    }
  });
};

