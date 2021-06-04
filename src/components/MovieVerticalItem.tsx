import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";
import images from "../config/images";
import styles from "../config/styles";
import { AirbnbRating } from "react-native-ratings";
import { Image } from "react-native";
import env from "../data/remote/env";

type Props = {
  data?: any;
};

export default class MovieVerticalItem extends Component<Props> {
  render() {
    const { data } = this.props;
    return (
      <View
        style={{ flexDirection: "row", marginBottom: 8, alignItems: "center" }}
      >
        <ImageBackground
          source={images.imageNotFound}
          style={{
            height: 75,
            width: 65,
            borderRadius: 8,
          }}
        >
          <Image
            source={{ uri: env.PATH_IMAGE + "/" + data.poster_path }}
            style={{
              height: 75,
              width: 65,
              borderRadius: 8,
            }}
          />
        </ImageBackground>
        <View style={{ width: 8 }} />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={2} style={styles.t14Bold}>
              {data.original_title}
            </Text>
          </View>
          <View style={{ width: 84, marginBottom: 8 }}>
            <AirbnbRating
              defaultRating={data.vote_average / 2}
              isDisabled={true}
              showRating={false}
              size={12}
              starContainerStyle={{ paddingRight: 0 }}
            />
          </View>
          <Text style={styles.t12Grey}>Released {data.release_date}</Text>
        </View>
      </View>
    );
  }
}
