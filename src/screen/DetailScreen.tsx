import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BaseComponent from "../common/BaseComponent";
import images from "../config/images";
import { Routes } from "../navigation/MainNavigation";

export default class DetailScreen extends BaseComponent<Routes.DETAIL> {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={images.back} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <Text>Detail</Text>
      </View>
    );
  }
}
