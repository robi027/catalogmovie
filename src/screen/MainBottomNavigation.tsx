import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BaseComponent from "../common/BaseComponent";
import { Routes } from "../navigation/MainNavigation";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import PopularScreen from "./PopularScreen";

const Tab = createBottomTabNavigator();

export default class MainBottomNavigation extends BaseComponent<
  Routes.BOTTOM_NAVIGATION
> {
  render() {
    return (
      <Tab.Navigator tabBar={(props) => this.item(props)}>
        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Popular"} component={PopularScreen} />
      </Tab.Navigator>
    );
  }

  item = (props: BottomTabBarProps) => {
    const { routes, index } = props.state;
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
        }}
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
