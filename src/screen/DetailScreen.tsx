import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BaseComponent from "../common/BaseComponent";
import images from "../config/images";
import { Prop, Routes } from "../navigation/MainNavigation";

type Props = Prop<Routes.DETAIL>;
export default class DetailScreen extends BaseComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.print(this.props.route.params.data);
  }
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
