import * as CONSTANTS from './constants';

const initialState = {
  isSidebarOpened: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.OPEN_SIDEBAR:
      return Object.assign({}, state, { isSidebarOpened: true });
    case CONSTANTS.CLOSE_SIDEBAR:
      return Object.assign({}, state, { isSidebarOpened: false });
    default:
      return state;
  }
}

export const select = state => state;
