import React, { Component } from "react";
import { View, ImageBackground, Text } from "react-native";
import images from "../config/images";
import styles from "../config/styles";
import { AirbnbRating } from "react-native-ratings";

type Props = {
  data: number | undefined;
};

export default class MovieVerticalItem extends Component<Props> {
  render() {
    const {} = this.props;
    return (
      <View
        style={{ flexDirection: "row", marginBottom: 8, alignItems: "center" }}
      >
        <ImageBackground
          source={images.back}
          style={{
            height: 75,
            width: 65,
            backgroundColor: "red",
            borderRadius: 8,
          }}
        />
        <View style={{ width: 8 }} />
        <View>
          <Text style={styles.t14Bold}>Robi</Text>
          <View style={{ width: 84, marginVertical: 8 }}>
            <AirbnbRating
              isDisabled={true}
              showRating={false}
              size={12}
              starContainerStyle={{ paddingRight: 0 }}
            />
          </View>
          <Text style={styles.t12Grey}>Horror</Text>
        </View>
      </View>
    );
  }
}
