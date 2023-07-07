export const DISPLAY_LOADING = "DISPLAY_LOADING";
export const HIDDEN_LOADING = "HIDDEN_LOADING";
export const SHOW_TOAST = "SHOW_TOAST";
export const SET_LOADING = "SET_LOADING";
export const setLoading = (visible) => ({
  type: SET_LOADING,
  visible,
});

export const showToast = (toast) => ({ type: SHOW_TOAST, toast });

const initState = {
  visible: false,
  toast: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING: {
      return { ...state, visible: true };
    }
    case HIDDEN_LOADING: {
      return { ...state, visible: false };
    }
    case SET_LOADING: {
      return { ...state, visible: false };
    }
    case SHOW_TOAST: {
      return { ...state, visible: action.visible };
    }
    default:
      return { ...state };
  }
};
