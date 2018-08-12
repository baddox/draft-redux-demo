import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// reducers
import draft from "./draft";
import preview from "./preview";

// middlewares
import { makeMiddleware as makeDebounceMiddleware } from "./debounce";
import { makeMiddleware as makeDispatchWhenMiddleware } from "./dispatchWhen";
import { middleware as requesterMiddleware } from "./requester";

const reducer = combineReducers({
  draft,
  preview,
});

const middlewares = [
  makeDebounceMiddleware(),
  makeDispatchWhenMiddleware(),
  requesterMiddleware,
];

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
