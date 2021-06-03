/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { name as appName } from "./app.json";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";

const store = createStore(reducers, applyMiddleware(thunk));

const Root = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
