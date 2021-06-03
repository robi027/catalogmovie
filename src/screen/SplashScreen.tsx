import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import BaseComponent from "../common/BaseComponent";
import colors from "../config/colors";
import styles from "../config/styles";
import { Prop, Routes } from "../navigation/MainNavigation";
import VNav from "../navigation/VNav";

type Props = Prop<Routes.SPLASH> & {};

export default class SplashScreen extends BaseComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      VNav.main(this.props.navigation);
    }, 1000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text style={styles.t32BoldPink}>Catelog Movie</Text>
          <View style={{ marginTop: 16 }} />
          <ActivityIndicator color={colors.pink} size={50} />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            alignItems: "center",
            left: 0,
            right: 0,
          }}
        >
          <Text style={styles.t12Grey}>by Robi Dwi Setiawan</Text>
        </View>
      </View>
    );
  }
}
