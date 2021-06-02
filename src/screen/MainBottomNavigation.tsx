import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BaseComponent from "../common/BaseComponent";
import { Routes } from "../navigation/MainNavigation";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import MovieScreen from "./MovieScreen";
import TVScreen from "./TVScreen";
import styles from "../config/styles";
import colors from "../config/colors";
import images from "../config/images";

const Tab = createBottomTabNavigator();

const iconImage = [images.back, images.back];
export default class MainBottomNavigation extends BaseComponent<
  Routes.BOTTOM_NAVIGATION
> {
  render() {
    return (
      <Tab.Navigator tabBar={(props) => this.item(props)}>
        <Tab.Screen name={"Movie"} component={MovieScreen} />
        <Tab.Screen name={"TV"} component={TVScreen} />
      </Tab.Navigator>
    );
  }

  item = (props: BottomTabBarProps) => {
    const { routes, index } = props.state;
    return (
      <View
        style={[
          {
            flexDirection: "row",
            backgroundColor: colors.white,
          },
          styles.shadow,
        ]}
      >
        {routes.map((route, indexRoute) => {
          const isFocused = index === indexRoute;
          const onPress = () => {
            const event = props.navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              key={indexRoute}
              style={{
                flex: 1,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onPress}
            >
              <Image
                source={iconImage[index]}
                style={{
                  height: 16,
                  width: 16,
                  tintColor: isFocused ? "red" : "black",
                }}
              />
              <View style={{ marginVertical: 2 }} />
              <Text style={{ color: isFocused ? "red" : "black" }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
}
