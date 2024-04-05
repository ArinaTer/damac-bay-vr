import { toggleClassToAlter } from '../../alter_parent_window.js';
import { toggleClassName } from '../../../modules/functions.js';
export function fullscreen(viewerInstance) {
  viewerInstance.addEventListener('fullscreen', ({ data }) => {
    toggleClassName(document.documentElement, 'fullscreen-enabled');
    toggleClassToAlter();
  });
};
