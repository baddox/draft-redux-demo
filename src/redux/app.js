import { combineReducers, createStore, applyMiddleware, compose } from "redux";

// reducers
import draft from "./draft";
import draftFetcher from "./draftFetcher";

// middlewares
import { makeMiddleware as makeDebounceMiddleware } from "./debounce";
import { middleware as draftFetcherMiddleware } from "./draftFetcher";

const reducer = combineReducers({
  draft,
  draftFetcher
});

const middlewares = [makeDebounceMiddleware(), draftFetcherMiddleware];

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
