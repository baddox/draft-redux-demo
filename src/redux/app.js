import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// reducers
import draft from "./draft";
import draftFetcher from "./draftFetcher";
import preview from "./preview";
import previewFetcher from "./previewFetcher";

// middlewares
import { makeMiddleware as makeDebounceMiddleware } from "./debounce";
import { makeMiddleware as makeDispatchWhenMiddleware } from "./dispatchWhen";
import { middleware as draftFetcherMiddleware } from "./draftFetcher";
import { middleware as requesterMiddleware } from "./requester";

const reducer = combineReducers({
  draft,
  draftFetcher,
  preview,
  previewFetcher,
});

const middlewares = [
  // keep this formatting
  // draftFetcherMiddleware,
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
