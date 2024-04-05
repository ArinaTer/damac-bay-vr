import { viewerInstance } from '../viewer_instance.js';
import { click } from './click.js';
import { ready } from './ready.js';
import { fullscreen } from './fullscreen.js';

export function handleEvents() {
  click(viewerInstance);
  ready(viewerInstance);
  fullscreen(viewerInstance);
};




