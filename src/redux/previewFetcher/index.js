import { dispatchWhen } from "../dispatchWhen";

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

const FETCH = "[previewFetcher] FETCH";
const SUCCESS = "[previewFetcher] SUCCESS";
const FAILURE = "[previewFetcher] FAILURE";

export const fetch = payload => ({ type: FETCH, payload });
export const success = data => ({ type: SUCCESS, payload: data });
export const failure = error => ({ type: FAILURE, payload: error });
