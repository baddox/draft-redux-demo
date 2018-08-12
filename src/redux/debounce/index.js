import get from "lodash/get";

const KEY = "debounce";

export const debounceAction = (action, ms) => {
  const config = { ms };
  const meta = { ...action.meta, [KEY]: config };
  return { ...action, ...meta };
};

export const makeMiddleware = () => store => next => action => {
  const ms = get(action, ["meta", KEY, "ms"], 0);
  if (ms > 0) {
    console.log("debouncing", ms, "ms");
  }
  // console.log("dispatching", action);
  let result = next(action);
  // console.log("next state", store.getState());
  return result;
};
