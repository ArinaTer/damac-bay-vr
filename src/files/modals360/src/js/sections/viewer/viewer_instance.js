import { IS_IPADE } from '../../components/queries.js';

/**
   * viewer initialization
   */
export const viewerInstance = new PhotoSphereViewer.Viewer({
  plugins: [PhotoSphereViewer.GyroscopePlugin],
  container: document.querySelector(".viewer__wrapper"),
  defaultZoomLvl: 0,
  navbar: ["zoom", !IS_IPADE ? "" : "gyroscope", "caption", "fullscreen"],
  minFov: 60,
  posePitch: 2,
});