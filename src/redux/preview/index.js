import { dispatchWhen } from "../dispatchWhen";

const initialState = {
  open: false,
  text: "default preview text",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_OPEN:
      return { ...state, open: payload.open };
    default:
      return state;
  }
};

export default reducer;

export const SET_OPEN = "[preview] SET_OPEN";

export const setOpen = open =>
  dispatchWhen(
    { type: SET_OPEN, payload: { open } },
    ({ draft }) => draft.text.length >= 5
  );
