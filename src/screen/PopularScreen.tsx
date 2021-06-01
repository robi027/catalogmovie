import React from "react";
import { Text, View } from "react-native";
import BaseComponent from "../common/BaseComponent";
import { Routes } from "../navigation/MainNavigation";

export default class PopularScreen extends BaseComponent<Routes.POPULAR> {
  render() {
    return (
      <View>
        <Text>Popular Screen</Text>
      </View>
    );
  }
}
