import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import MainBottomNavigation from "../screen/MainBottomNavigation";
import DetailScreen from "../screen/DetailScreen";

export enum Routes {
  HOME = "Home",
  POPULAR = "Popular",
  BOTTOM_NAVIGATION = "BottomNavigation",
  DETAIL = "Detail",
}

export type RootStackParamsList = {
  [Routes.HOME]: undefined;
  [Routes.POPULAR]: { data?: object } | undefined;
  [Routes.BOTTOM_NAVIGATION]: undefined;
  [Routes.DETAIL]: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

export type Prop<T extends keyof RootStackParamsList> = {
  navigation: StackNavigationProp<RootStackParamsList, T>;
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={Routes.BOTTOM_NAVIGATION}
        headerMode="none"
      >
        <RootStack.Screen
          name={Routes.BOTTOM_NAVIGATION}
          component={MainBottomNavigation}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <RootStack.Screen
          name={Routes.DETAIL}
          component={DetailScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
