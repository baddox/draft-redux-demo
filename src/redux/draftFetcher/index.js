import { SET_TEXT } from "../draft";

const STATUS_NONE = "none";
const STATUS_FETCHING = "fetching";
const STATUS_SUCCESS = "success";
const STATUS_FAILURE = "failure";

const initialState = {
  status: STATUS_NONE,
  data: null,
  error: null,
  successTime: null
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

export const middleware = store => next => action => {
  if (action.type === SET_TEXT) {
    console.log("found SET_TEXT", action.payload);
  }
  // console.log("dispatching", action);
  let result = next(action);
  // console.log("next state", store.getState());
  return result;
};
