import { getCopyRightForMedia } from './get_copy_right_for_media.js';
export function setCopyRightTo(to, isNewLine) {
  const parentBlock = document.querySelector(to);
  const newDiv = getCopyRightForMedia(isNewLine);
  parentBlock.appendChild(newDiv);
}