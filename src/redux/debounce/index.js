import get from "lodash/get";
import debounce from "lodash/debounce";

const KEY = "debounce";

export const debounceAction = (action, ms) => {
  const config = { ms };
  const meta = { ...action.meta, [KEY]: config };
  return { ...action, meta };
};

export const makeMiddleware = () => _store => next => {
  const debouncedNexts = {};

  const getDebouncedNext = (action, ms) => {
    const key = action.type;
    if (debouncedNexts[key]) {
      return debouncedNexts[key];
    } else {
      // Note that the first `ms` for a given key won't ever change if you later
      // dispatch actions with the same key but a different `ms`.
      const debouncedNext = debounce(next, ms);
      debouncedNexts[key] = debouncedNext;
      return debouncedNext;
    }
  };

  return action => {
    const ms = get(action, ["meta", KEY, "ms"], 0);
    if (ms > 0) {
      console.log("debouncing", ms, "ms");
      const debouncedNext = getDebouncedNext(action, ms);
      debouncedNext(action);
    } else {
      next(action);
    }
  };
};
