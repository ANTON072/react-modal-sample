export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_HIDE = 'MODAL_HIDE';

export function modalShow() {
  return {
    type: MODAL_SHOW,
    payload: true
  };
}

export function modalHide() {
  return {
    type: MODAL_HIDE,
    payload: false
  };
}

export default (state = { show: false }, action) => {
  switch (action.type) {
    case MODAL_SHOW: {
      return { ...state, show: true };
    }
    case MODAL_HIDE: {
      return { ...state, show: false };
    }
    default:
      return state;
  }
};
