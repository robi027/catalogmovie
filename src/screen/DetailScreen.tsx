import React from "react";
import { View, Text } from "react-native";
import BaseComponent from "../common/BaseComponent";
import { Routes } from "../navigation/MainNavigation";

export default class DetailScreen extends BaseComponent<Routes.DETAIL> {
  render() {
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}
