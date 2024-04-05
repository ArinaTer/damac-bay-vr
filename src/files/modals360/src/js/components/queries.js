import { queryMatches } from '../modules/functions.js';
export const IS_IPADE = queryMatches("(max-width:1170px)");
export const IS_TABLETS = queryMatches("(max-width:991.98px)");