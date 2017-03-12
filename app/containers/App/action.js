import * as CONSTANTS from './constants';

export function openSidebar() {
  return {
    type: CONSTANTS.OPEN_SIDEBAR
  };
}

export function closeSidebar() {
  return {
    type: CONSTANTS.CLOSE_SIDEBAR
  };
}
