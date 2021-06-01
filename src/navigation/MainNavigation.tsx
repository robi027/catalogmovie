import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import PopularScreen from "../screen/PopularScreen";
import { StackNavigationProp } from "@react-navigation/stack";

export enum Routes {
  HOME = "Home",
  POPULAR = "Popular",
}

export type RootStackParamsList = {
  [Routes.HOME]: undefined;
  [Routes.POPULAR]: { data?: object } | undefined;
};

const RootStack = createStackNavigator<RootStackParamsList>();

export type Prop<T extends keyof RootStackParamsList> = {
  navigation: StackNavigationProp<RootStackParamsList, T>;
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.HOME} headerMode="none">
        <RootStack.Screen
          name={Routes.HOME}
          component={HomeScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <RootStack.Screen
          name={Routes.POPULAR}
          component={PopularScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
