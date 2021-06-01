/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import { name as appName } from "./app.json";

const Root = () => {
  return <RootNavigation />;
};

AppRegistry.registerComponent(appName, () => Root);
