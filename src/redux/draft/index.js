import { makeRequester, withRequesters } from "../requester";
import { debounceAction } from "../debounce";

export const SET_TEXT = "[draft] SET_TEXT";
export const SET_SAVED = "[draft] SET_SAVED";

const draftSave = makeRequester("draftSave");

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
    case draftSave.SUCCESS:
      if (payload.data === state.text) {
        return { ...state, saved: true };
      }
    default:
      return state;
  }
};

export default withRequesters({ draftSave }, reducer);

export const setText = text => ({ type: SET_TEXT, payload: { text } });
export const saveDraft = text =>
  debounceAction(
    draftSave.request("draft", { method: "post", body: text }),
    1000
  );
export const setSaved = saved => ({ type: SET_SAVED, payload: { saved } });
