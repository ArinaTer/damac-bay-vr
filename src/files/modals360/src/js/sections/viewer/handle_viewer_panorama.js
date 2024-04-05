import { removeClassName, addClassName } from '../../modules/functions.js';

export function handleViewPanorama(viewer) {
  if (!handleViewPanorama.prevActive) {
    handleViewPanorama.prevActive = null;
  }
  return function name(el) {
    const src = el.getAttribute('data-src');
    if (handleViewPanorama.prevActive) {
      removeClassName(handleViewPanorama.prevActive, 'active');
    }
    addClassName(el, 'active');
    viewer.setPanorama(src);
    handleViewPanorama.prevActive = el;
  };
}