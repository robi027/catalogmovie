import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import MainBottomNavigation from "../screen/MainBottomNavigation";
import DetailScreen from "../screen/DetailScreen";
import SplashScreen from "../screen/SplashScreen";

export enum Routes {
  MOVIE = "Movie",
  TV = "TV",
  BOTTOM_NAVIGATION = "BottomNavigation",
  DETAIL = "Detail",
  SPLASH = "Splash",
}

export type RootStackParamsList = {
  [Routes.MOVIE]: undefined;
  [Routes.TV]: { data?: object } | undefined;
  [Routes.BOTTOM_NAVIGATION]: undefined;
  [Routes.DETAIL]: undefined;
  [Routes.SPLASH]: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

export type Prop<T extends keyof RootStackParamsList> = {
  navigation: StackNavigationProp<RootStackParamsList, T>;
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.SPLASH} headerMode="none">
        <RootStack.Screen
          name={Routes.SPLASH}
          component={SplashScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
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
