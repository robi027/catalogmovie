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
  MOVIE = "Movie",
  TV = "TV",
  BOTTOM_NAVIGATION = "BottomNavigation",
  DETAIL = "Detail",
}

export type RootStackParamsList = {
  [Routes.MOVIE]: undefined;
  [Routes.TV]: { data?: object } | undefined;
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
