import { dispatchWhen } from "../dispatchWhen";
import { withRequesters, makeRequester } from "../requester";

export const SET_OPEN = "[preview] SET_OPEN";

const initialState = {
  open: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_OPEN:
      return { ...state, open: payload.open };
    default:
      return state;
  }
};

const preview = makeRequester("preview.text");

export default withRequesters({ preview }, reducer);

export const setOpen = open => ({ type: SET_OPEN, payload: { open } });

export const middleware = store => next => action => {
  next(action);
  if (action.type === SET_OPEN && action.payload.open) {
    const getPreviewWhenDraftIsSaved = dispatchWhen(
      preview.request("draft"),
      ({ draft }) => draft.saved
    );
    store.dispatch(getPreviewWhenDraftIsSaved);
  }
};
