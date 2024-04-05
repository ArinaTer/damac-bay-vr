
import { addClassName, removeClassName } from '../modules/functions.js';
import { addClassToAlter, removeClassToAlter } from './alter_parent_window.js';
export function popups() {
  const popupOpenBtns = document.querySelectorAll('[data-open-popup]');
  const closePopupBtns = document.querySelectorAll('[data-close]');
  const activeClassForBtn = '_active';
  const activeClassForPopup = 'popup_show';
  let popupId;
  let popupById;
  let activeOpenBtn;

  popupOpenBtns.forEach((openBtn) => {
    openBtn.addEventListener("click", () => {
      popupId = openBtn.getAttribute('data-open-popup');
      if (!popupById) {
        popupById = document.querySelector(`#${popupId}`);
        activeOpenBtn = openBtn;
      } else {
        removeClassName(activeOpenBtn, activeClassForBtn);
        removeClassName(popupById, activeClassForPopup);
        popupById = document.querySelector(`#${popupId}`);
        activeOpenBtn = openBtn;
      }
      addClassName(popupById, activeClassForPopup);
      addClassName(activeOpenBtn, activeClassForBtn);
      addClassToAlter();
    });
  });

  closePopupBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", function (e) {
      removeClassName(activeOpenBtn, activeClassForBtn);
      removeClassName(popupById, activeClassForPopup);
      removeClassToAlter();
      popupId = null;
      popupById = null;
      activeOpenBtn = null;
    });
  });
};
