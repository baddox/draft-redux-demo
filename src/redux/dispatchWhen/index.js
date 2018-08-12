import get from "lodash/get";
import partition from "lodash/partition";

const KEY = "dispatchWhen";

export const dispatchWhen = (action, shouldDispatch) => {
  const config = { shouldDispatch };
  const meta = { ...action.meta, [KEY]: config };
  return { ...action, meta };
};

export const makeMiddleware = () => store => next => {
  // The queue of actions that are waiting for their `shouldDispatch` function
  // to return true;
  let pending = [];

  return action => {
    const shouldDispatch = get(action, ["meta", KEY, "shouldDispatch"]);
    if (shouldDispatch) {
      // Push this action onto the pending queue and don't dispatch it yet.
      pending.push({ action, shouldDispatch });
    } else {
      // Dispatch normal actions as usual.
      next(action);
    }

    // Every time the state changes, we need to check every pending action and
    // dispatch it if necessary.
    const newState = store.getState();

    // Get all the pending actions that are ready to be dispatched now.
    const [ready, stillPending] = partition(pending, ({ shouldDispatch }) =>
      shouldDispatch(newState)
    );

    // Remove the ready actions from the pending queue (this must be done
    // before dispatching the ready actions, to prevent infinite loops);
    pending = stillPending;

    // Dispatch each ready action (in the order they were received).
    // Note we use `store.dispatch` instead of `next` so that the action will go
    // through the entire middleware chain.
    ready.forEach(({ action }) => {
      // Remove `KEY` from meta.
      const meta = { ...action.meta };
      delete meta[KEY];
      const readyAction = { ...action, meta };
      store.dispatch(readyAction);
    });
  };
};
