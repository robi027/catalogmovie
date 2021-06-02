import React, { Component } from "react";
import { ImageBackground, Text, View } from "react-native";
import images from "../config/images";
import styles from "../config/styles";
import { AirbnbRating } from "react-native-ratings";

type Props = {
  data: number | undefined;
};

export default class MovieHorizontalItem extends Component<Props> {
  render() {
    const {} = this.props;
    return (
      <View>
        <ImageBackground
          source={images.back}
          style={{
            height: 175,
            width: 130,
            borderRadius: 20,
            backgroundColor: "red",
            overflow: "hidden",
          }}
        ></ImageBackground>
        <View style={{ height: 8 }} />
        <Text style={styles.t14}>Fast & Farious</Text>
        <View style={{ width: 84 }}>
          <AirbnbRating
            isDisabled={true}
            showRating={false}
            size={12}
            starContainerStyle={{ paddingRight: 0 }}
          />
        </View>
      </View>
    );
  }
}
