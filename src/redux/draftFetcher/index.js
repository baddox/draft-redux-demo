import { SET_TEXT } from "../draft";
import { debounceAction } from "../debounce";

const STATUS_NONE = "none";
const STATUS_FETCHING = "fetching";
const STATUS_SUCCESS = "success";
const STATUS_FAILURE = "failure";

const initialState = {
  status: STATUS_NONE,
  data: null,
  error: null,
  successTime: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH:
      return { ...state, status: STATUS_FETCHING };
    case SUCCESS:
      return { ...state, status: STATUS_SUCCESS, data: payload };
    case FAILURE:
      return { ...state, status: STATUS_FAILURE, error: payload };
    default:
      return state;
  }
};

export default reducer;

const FETCH = "[draftFetcher] FETCH";
const SUCCESS = "[draftFetcher] SUCCESS";
const FAILURE = "[draftFetcher] FAILURE";

export const fetch = payload => ({ type: FETCH, payload });
export const success = data => ({ type: SUCCESS, payload: data });
export const failure = error => ({ type: FAILURE, payload: error });

export const middleware = _store => next => action => {
  next(action);
  if (action.type === SET_TEXT) {
    const text = action.payload;
    next(debounceAction(fetch(text), 2 * 1000));
  }
};
