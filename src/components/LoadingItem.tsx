import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import colors from "../config/colors";

interface Props {
  height?: string | number;
  width?: string | number;
  size?: number;
}

export default class LoadingItem extends Component<Props> {
  render() {
    const { height, width, size } = this.props;
    return (
      <View
        style={{
          height: height || "100%",
          width: width || "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color={colors.pink} size={size || 50} />
      </View>
    );
  }
}
