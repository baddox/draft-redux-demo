const initialState = {
  saved: true,
  text: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TEXT:
      return { ...state, saved: false, text: payload.text };
    case SET_SAVED:
      return { ...state, saved: payload.saved };
    default:
      return state;
  }
};

export default reducer;

export const SET_TEXT = "[draft] SET_TEXT";
export const SET_SAVED = "[draft] SET_SAVED";

export const setText = text => ({ type: SET_TEXT, payload: { text } });
export const setSaved = saved => ({ type: SET_SAVED, payload: { saved } });
