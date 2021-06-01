import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import BaseComponent from "../common/BaseComponent";
import styles from "../config/styles";
import { Routes } from "../navigation/MainNavigation";
import VNav from "../navigation/VNav";

export default class HomeScreen extends BaseComponent<Routes.HOME> {
  render() {
    return (
      <View>
        <Text style={styles.t14}>Robi Dwi Setiawan</Text>
        <TouchableOpacity onPress={() => VNav.detail(this.props.navigation)}>
          <Text>Popular</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
