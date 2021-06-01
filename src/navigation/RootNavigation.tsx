import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import MainNavigation from "./MainNavigation";

export default class RootNavigation extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <MainNavigation />
      </SafeAreaView>
    );
  }
}
