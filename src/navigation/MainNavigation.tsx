import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackScreenProps,
} from "@react-navigation/stack";
import MainBottomNavigation from "../screen/MainBottomNavigation";
import DetailScreen from "../screen/DetailScreen";
import SplashScreen from "../screen/SplashScreen";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export enum Routes {
  MOVIE = "Movie",
  TV = "TV",
  BOTTOM_NAVIGATION = "BottomNavigation",
  DETAIL = "Detail",
  SPLASH = "Splash",
}

export type RootStackParamsList = {
  [Routes.MOVIE]: undefined;
  [Routes.TV]: { data?: any } | undefined;
  [Routes.BOTTOM_NAVIGATION]: undefined;
  [Routes.DETAIL]: {data? : any};
  [Routes.SPLASH]: undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

export type Prop<T extends keyof RootStackParamsList> = StackScreenProps<
  RootStackParamsList,
  T
>;

export type PropBottomNavigation<
  T extends keyof RootStackParamsList
> = BottomTabScreenProps<RootStackParamsList, T>;

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
