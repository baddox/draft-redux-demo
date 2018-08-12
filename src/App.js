import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import { makeStore } from "./redux/app";

const store = makeStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
