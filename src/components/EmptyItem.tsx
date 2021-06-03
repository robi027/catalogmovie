import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../config/styles";

interface Props {
  message?: string;
  height?: number;
  width?: number;
}

export default class EmptyItem extends Component<Props> {
  render() {
    const { message, height, width } = this.props;
    return (
      <View
        style={{
          height: height || "100%",
          width: width || "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.t14}>{message || "Data is empty"}</Text>
      </View>
    );
  }
}
