
import { setCopyRightTo } from '../../../../files/media_copy_right/js/set_copytight_to.js';
export function ready(viewerInstance) {
  viewerInstance.addEventListener('ready', (e) => {
    document.documentElement.classList.add('viewer-ready');
    setCopyRightTo('.psv-navbar.psv--capture-event.psv-navbar--open', true);
  }, { once: true });
};