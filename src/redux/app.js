import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// reducers
import draft from "./draft";
import preview from "./preview";

// middlewares
import { makeMiddleware as makeDebounceMiddleware } from "./debounce";
import { makeMiddleware as makeDispatchWhenMiddleware } from "./dispatchWhen";
import { middleware as requesterMiddleware } from "./requester";
import { middleware as previewMiddleware } from "./preview";

const reducer = combineReducers({
  draft,
  preview,
});

const middlewares = [
  // These need to come first:
  makeDebounceMiddleware(),
  makeDispatchWhenMiddleware(),
  requesterMiddleware,

  // App middlewares:
  previewMiddleware,
];

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
