import api from "../../api";
import mapValues from "lodash/mapValues";
import each from "lodash/each";
import get from "lodash/get";

const STATUS_NONE = "none";
const STATUS_REQUESTING = "requesting";
const STATUS_SUCCESS = "success";
const STATUS_ERROR = "error";

const KEY = "requester";

export const withRequesters = (requesters, reducer) => {
  const requestersInitialState = mapValues(requesters, requester =>
    requester.reducer(undefined, {})
  );
  const initialState = { ...reducer(undefined, {}), ...requestersInitialState };
  const newReducer = (state = initialState, action) => {
    let newState = { ...state };
    // Run each requester state through its reducer.
    each(requesters, (requester, key) => {
      newState[key] = requester.reducer(newState[key], action);
    });
    // Run the state through the original reducer.
    return reducer(newState, action);
  };
  return newReducer;
};

export const makeRequester = name => {
  //
  // reducer
  //
  const initialState = {
    status: STATUS_NONE,
    data: null,
    error: null,
    successTime: null,
  };

  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REQUEST:
        return { ...state, status: STATUS_REQUESTING };
      case SUCCESS:
        return { ...state, status: STATUS_SUCCESS, data: payload.data };
      case ERROR:
        return { ...state, status: STATUS_ERROR, error: payload.error };
      default:
        return state;
    }
  };

  //
  // action types and creators
  //
  const REQUEST = `[${name}] REQUEST`;
  const SUCCESS = `[${name}] SUCCESS`;
  const ERROR = `[${name}] ERROR`;

  const success = data => ({ type: SUCCESS, payload: { data } });
  const error = error => ({ type: ERROR, payload: { error } });

  // The main user-facing API to make a request.
  const request = (url, { method = "get", body }) => {
    const meta = {
      [KEY]: {
        url,
        method,
        body,
        success,
        error,
      },
    };
    return { type: REQUEST, meta };
  };

  return {
    reducer,
    request,
    REQUEST,
    SUCCESS,
    ERROR,
  };
};

export const middleware = store => next => action => {
  const requester = get(action, ["meta", KEY]);
  if (requester) {
    const { url, method, body, success, error } = requester;
    next(action);
    api[method](url, body)
      .then(response => store.dispatch(success(response)))
      .catch(err => store.dispatch(error(err)));
  } else {
    // Dispatch normal actions as usual.
    next(action);
  }
};
