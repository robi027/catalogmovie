import React, { Component } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import images from "../config/images";
import styles from "../config/styles";
import { AirbnbRating } from "react-native-ratings";
import env from "../data/remote/env";

type Props = {
  image?: string;
  rating?: number;
  title?: string;
};

export default class MovieHorizontalItem extends Component<Props> {
  render() {
    const { image, rating, title } = this.props;
    return (
      <View>
        <ImageBackground
          source={images.imageNotFound}
          style={{
            height: 175,
            width: 130,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: env.PATH_IMAGE + image }}
            style={{
              height: 175,
              width: 130,
              borderRadius: 20,
              overflow: "hidden",
            }}
          />
        </ImageBackground>
        <View style={{ height: 8 }} />
        <Text numberOfLines={1} style={[styles.t14, { width: 130 }]}>
          {title}
        </Text>
        <View style={{ width: 84 }}>
          <AirbnbRating
            defaultRating={(rating || 0) / 2}
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
